TODOS
/* COLLECTIONS (in lib) */
  import { Mongo } from 'meteor/mongo';
  import { Factory } from 'meteor/factory';
  import faker from 'faker';
  import incompleteCountDenormalizer from './incompleteCountDenormalizer.js';
  import { SimpleSchema } from 'meteor/aldeed:simple-schema';
  import { Lists } from '../lists/lists.js';
  // Define actions on collection
  class TodosCollection extends Mongo.Collection {
    // insert db call takes a todo & callback fxn:
      // ...if todo is undated, date it now'...
      // ...save var as dated insert...
      // ...add incompleteCountDenormalizer for after insert...
      // ...return the result--thus RUN the insert...
    insert(doc, callback) {
      const ourDoc = doc;
      ourDoc.createdAt = ourDoc.createdAt || new Date();
      const result = super.insert(ourDoc, callback);
      incompleteCountDenormalizer.afterInsertTodo(ourDoc);
      return result;
    }
    // update db call takes a selector & modifier...
      // ...save var as callback returner...
      // ...add incompleteCountDenormalizer for after update...
      // ...return the result var, thus run the update...
    update(selector, modifier) {
      const result = super.update(selector, modifier);
      incompleteCountDenormalizer.afterUpdateTodo(selector, modifier);
      return result;
    }
    // remove db call takes a selector...
      // ...find the todo for this selector...
      // ...save var as callback returner...
      // ...add incompleteCountDenormalizer for after remove...
      // ...return the result var, thus run the remove...
    remove(selector) {
      const todos = this.find(selector).fetch();
      const result = super.remove(selector);
      incompleteCountDenormalizer.afterRemoveTodos(todos);
      return result;
    }
  }
  // save it all at Todos collection
  export const Todos = new TodosCollection('Todos');
  // Add schema to Todos collection
  Todos.schema = new SimpleSchema({
    listId: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      denyUpdate: true,
    },
    text: {
      type: String,
      max: 100,
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
    },
    checked: {
      type: Boolean,
      defaultValue: false,
    },
  });
  Todos.attachSchema(Todos.schema);
  // Only publish these fields to client
  Todos.publicFields = {
    listId: 1,
    text: 1,
    createdAt: 1,
    checked: 1,
  };
  // TODO This factory has a name - do we have a code style for this?
  //   - usually I've used the singular, sometimes you have more than one though, like
  //   'todo', 'emptyTodo', 'checkedTodo'
  Factory.define('todo', Todos, {
    listId: () => Factory.get('list'),
    text: () => faker.lorem.sentence(),
    createdAt: () => new Date(),
  });
  // Helper fxns:
  Todos.helpers({
    // list returns the list that this todo has a listId
    list() {
      return Lists.findOne(this.listId);
    },
    // returns true if this todo's list is editable by loggedin user
    editableBy(userId) {
      return this.list().editableBy(userId);
    },
  });

/* METHODS (ON BOTH SERVER & CLIENT...server/methods, client/methodsStubs) */
  import { Meteor } from 'meteor/meteor';
  import { _ } from 'meteor/underscore';
  import { ValidatedMethod } from 'meteor/mdg:validated-method';
  import { SimpleSchema } from 'meteor/aldeed:simple-schema';
  import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
  import { Todos } from './todos.js';
  import { Lists } from '../lists/lists.js';
  // Validator for insert, ensuring todo: listId & text are strings...
    // ...finds list w/listId of todo...
    // ...returns error if list is private & not linked to loggedin user...
    // ...otherwise, adds unchecked & new Date, then inserts todo...
  export const insert = new ValidatedMethod({
    name: 'todos.insert',
    validate: new SimpleSchema({
      listId: { type: String },
      text: { type: String },
    }).validator(),
    run({ listId, text }) {
      const list = Lists.findOne(listId);
      if (list.isPrivate() && list.userId !== this.userId) {
        throw new Meteor.Error('todos.insert.accessDenied',
          'Cannot add todos to a private list that is not yours');
      }
      const todo = {
        listId,
        text,
        checked: false,
        createdAt: new Date(),
      };
      Todos.insert(todo);
    },
  });
  // Validator for setCheckedStatus:
    // ...ensures todoId-string & newCheckedStatus-boolean...
    // Finds todo with this todoId...
    // ...if checked IS the newCheckedStatus, return...
    // ...if loggedin user cannot edit the todo, send error...
    // ...update todo w/todoId selector, "$set: {checked: newCheckedStatus}" modifier
  export const setCheckedStatus = new ValidatedMethod({
    name: 'todos.makeChecked',
    validate: new SimpleSchema({
      todoId: { type: String },
      newCheckedStatus: { type: Boolean },
    }).validator(),
    run({ todoId, newCheckedStatus }) {
      const todo = Todos.findOne(todoId);
      if (todo.checked === newCheckedStatus) {
        return;
      }
      if (!todo.editableBy(this.userId)) {
        throw new Meteor.Error('todos.setCheckedStatus.accessDenied',
          'Cannot edit checked status in a private list that is not yours');
      }
      Todos.update(todoId, { $set: {
        checked: newCheckedStatus,
      } });
    },
  });
  // Validator for updateText
    // ...ensures todoId-string & newText-String...
    // Finds todo with this todoId...
    // ...if loggedin user cannot edit the todo, send error...
    // ...update todo w/todoId selector, "$set: {text: newText}" modifier
  export const updateText = new ValidatedMethod({
    name: 'todos.updateText',
    validate: new SimpleSchema({
      todoId: { type: String },
      newText: { type: String },
    }).validator(),
    run({ todoId, newText }) {
      const todo = Todos.findOne(todoId);
      if (!todo.editableBy(this.userId)) {
        throw new Meteor.Error('todos.updateText.accessDenied',
          'Cannot edit todos in a private list that is not yours');
      }
      Todos.update(todoId, {
        $set: { text: newText },
      });
    },
  });
  // Validator for remove:
    // ...ensures todoId-string...
    // Finds todo with this todoId...
    // ...if loggedin user cannot edit the todo, send error...
    // ...remove todo w/todoId
  export const remove = new ValidatedMethod({
    name: 'todos.remove',
    validate: new SimpleSchema({
      todoId: { type: String },
    }).validator(),
    run({ todoId }) {
      const todo = Todos.findOne(todoId);
      if (!todo.editableBy(this.userId)) {
        throw new Meteor.Error('todos.remove.accessDenied',
          'Cannot remove todos in a private list that is not yours');
      }
      Todos.remove(todoId);
    },
  });
  // Get list of all method names on Todos
  const TODOS_METHODS = _.pluck([
    insert,
    setCheckedStatus,
    updateText,
    remove,
  ], 'name');
  // DDP???
  if (Meteor.isServer) {
    // Only allow 5 todos operations per connection per second
    DDPRateLimiter.addRule({
      name(name) {
        return _.contains(TODOS_METHODS, name);
      },
      // Rate limit per connection ID
      connectionId() { return true; },
    }, 5, 1000);
  }

/* SERVER-SIDE PUBLICATION */
  import { Meteor } from 'meteor/meteor';
  import { SimpleSchema } from 'meteor/aldeed:simple-schema';
  import { Todos } from '../todos.js';
  import { Lists } from '../lists.js';
  // Publish todos within a givin list
  Meteor.publishComposite('todos.inList', function todosInList(listId) {
    // Validate the listId as string
    new SimpleSchema({
      listId: { type: String },
    }).validate({ listId });
    // save loggedin user as var
    const userId = this.userId;
    // find this listId if its public (no userId) or belong to loggedin user...
      // ...which returns only the listId (options)--which drives children...
      // Children-returns publicFields for all todos matching this listId
    return {
      find() {
        const query = {
          _id: listId,
          $or: [{ userId: { $exists: false } }, { userId }],
        };
        const options = {
          fields: { _id: 1 },
        };
        return Lists.find(query, options);
      },
      children: [{
        find(list) {
          return Todos.find({ listId: list._id }, { fields: Todos.publicFields });
        },
      }],
    };
  });

/* INCOMPLETECOUNTDENORMALIZER IN BOTH CLIENT & SERVER */
  import { _ } from 'meteor/underscore';
  import { check } from 'meteor/check';
  import { Todos } from './todos.js';
  import { Lists } from '../lists/lists.js';
  // Define incompleteCountDenormalizer
  const incompleteCountDenormalizer = {
    _updateList(listId) {
      // Recalculate the correct incomplete count direct from MongoDB
      const incompleteCount = Todos.find({
        listId,
        checked: false,
      }).count();
      Lists.update(listId, { $set: { incompleteCount } });
    },
    afterInsertTodo(todo) {
      this._updateList(todo.listId);
    },
    afterUpdateTodo(selector, modifier) {
      // We only support very limited operations on todos
      check(modifier, { $set: Object });
      // We can only deal with $set modifiers, but that's all we do in this app
      if (_.has(modifier.$set, 'checked')) {
        Todos.find(selector, { fields: { listId: 1 } }).forEach(todo => {
          this._updateList(todo.listId);
        });
      }
    },
    // Here we need to take the list of todos being removed, selected *before* the update
    // because otherwise we can't figure out the relevant list id(s) (if the todo has been deleted)
    afterRemoveTodos(todos) {
      todos.forEach(todo => this._updateList(todo.listId));
    },
  };
  export default incompleteCountDenormalizer;
