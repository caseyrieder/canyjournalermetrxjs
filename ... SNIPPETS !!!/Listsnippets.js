LISTS
/* COLLECTIONS (in lib) */
  import { Mongo } from 'meteor/mongo';
  import { SimpleSchema } from 'meteor/aldeed:simple-schema';
  import { Factory } from 'meteor/factory';
  import { Todos } from '../todos/todos.js';
  // Define actions on collection
  class ListsCollection extends Mongo.Collection {
    // insert db call takes a list & callback fxn:
      // ...if list is unnamed, we name it 'List X'...
      // ...& keep iterating up 1 letter while 'List X' already exists...
      // ...once we have a unique name, save it...
      // ...then returns to insert callback once we have the right name...
    insert(list, callback) {
      const ourList = list;
      if (!ourList.name) {
        let nextLetter = 'A';
        ourList.name = `List ${nextLetter}`;
        while (!!this.findOne({ name: ourList.name })) {
          // not going to be too smart here, can go past Z
          nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
          ourList.name = `List ${nextLetter}`;
        }
      }
      return super.insert(ourList, callback);
    }
    // remove db call takes selector & callback fxn:
      // ...remove the Todos from this listId...
      // ...returns to remove callback, & removes actual list...
    remove(selector, callback) {
      Todos.remove({ listId: selector });
      return super.remove(selector, callback);
    }
  }
  // Now 'Lists' has it insert & remove actions
  export const Lists = new ListsCollection('Lists');
  // Define List schema
  Lists.schema = new SimpleSchema({
    name: { type: String },
    incompleteCount: { type: Number, defaultValue: 0 },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
  });
  // Attach schema to list
  Lists.attachSchema(Lists.schema);
  // Only publish these fields to client
  Lists.publicFields = {
    name: 1,
    incompleteCount: 1,
    userId: 1,
  };
  // !!!!!!!!!!!!!!
  Factory.define('list', Lists, {});
  // Helper fxns:
  Lists.helpers({
    // A list is considered to be private if it has a userId set
    isPrivate() {
      return !!this.userId;
    },
    // Counts public (non-userId'd) lists...
      // ...Returns true if THIS is (a) public, (b) the only public list
    isLastPublicList() {
      const publicListCount = Lists.find({ userId: { $exists: false } }).count();
      return !this.isPrivate() && publicListCount === 1;
    },
    // Editable if (a) no userId (public), (b) loggedin user=list.userId...
    editableBy(userId) {
      if (!this.userId) {
        return true;
      }
      return this.userId === userId;
    },
    // todos returns all todos for this listId
    todos() {
      return Todos.find({ listId: this._id }, { sort: { createdAt: -1 } });
    },
  });

/* METHODS (ON BOTH SERVER & CLIENT...server/methods, client/methodsStubs) */
  import { Meteor } from 'meteor/meteor';
  import { ValidatedMethod } from 'meteor/mdg:validated-method';
  import { SimpleSchema } from 'meteor/aldeed:simple-schema';
  import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
  import { _ } from 'meteor/underscore';
  import { Lists } from './lists.js';
  // Validator for list id returner
  const LIST_ID_ONLY = new SimpleSchema({
    listId: { type: String },
  }).validator();
  // Validator for insert method
  export const insert = new ValidatedMethod({
    name: 'lists.insert',
    validate: new SimpleSchema({}).validator(),
    run() {
      return Lists.insert({});
    },
  });
  // Validator for makePrivate method, which 1st validates listId...
    // ...Ensures a user is logged in...
    // ...then finds the list in question...
    // ...then prevents user from privatizing LAST public list...
    // ...then assigns this list to loggedIn user
  export const makePrivate = new ValidatedMethod({
    name: 'lists.makePrivate',
    validate: LIST_ID_ONLY,
    run({ listId }) {
      if (!this.userId) {
        throw new Meteor.Error('lists.makePrivate.notLoggedIn',
          'Must be logged in to make private lists.');
      }
      const list = Lists.findOne(listId);
      if (list.isLastPublicList()) {
        throw new Meteor.Error('lists.makePrivate.lastPublicList',
          'Cannot make the last public list private.');
      }
      Lists.update(listId, {
        $set: { userId: this.userId },
      });
    },
  });
  // Validator for making list public, which 1st validates listId...
    // ...Ensures a user is logged in...
    // ...then finds the list in question...
    // ...then prevents user from editing if not permitted...
    // ...then deletes  the userId from this list--thus publicizing
  export const makePublic = new ValidatedMethod({
    name: 'lists.makePublic',
    validate: LIST_ID_ONLY,
    run({ listId }) {
      if (!this.userId) {
        throw new Meteor.Error('lists.makePublic.notLoggedIn',
          'Must be logged in.');
      }
      const list = Lists.findOne(listId);
      if (!list.editableBy(this.userId)) {
        throw new Meteor.Error('lists.makePublic.accessDenied',
          'You don\'t have permission to edit this list.');
      }
      Lists.update(listId, {
        $unset: { userId: true },
      });
    },
  });
  // Validator for updating list name, 1st validates listId & newName...
    // ...Finds the list in question...
    // ...then prevents user from editing if not permitted...
    // ...then changes the new for this list
  export const updateName = new ValidatedMethod({
    name: 'lists.updateName',
    validate: new SimpleSchema({
      listId: { type: String },
      newName: { type: String },
    }).validator(),
    run({ listId, newName }) {
      const list = Lists.findOne(listId);
      if (!list.editableBy(this.userId)) {
        throw new Meteor.Error('lists.updateName.accessDenied',
          'You don\'t have permission to edit this list.');
      }
      Lists.update(listId, {
        $set: { name: newName },
      });
    },
  });
  // Validator for removing, 1st validates listId...
    // ...Finds the list in question...
    // ...then prevents user from editing if not permitted...
    // ...then prevents user from removing last public list...
    // ...then removes list
  export const remove = new ValidatedMethod({
    name: 'lists.remove',
    validate: LIST_ID_ONLY,
    run({ listId }) {
      const list = Lists.findOne(listId);
      if (!list.editableBy(this.userId)) {
        throw new Meteor.Error('lists.remove.accessDenied',
          'You don\'t have permission to remove this list.');
      }
      if (list.isLastPublicList()) {
        throw new Meteor.Error('lists.remove.lastPublicList',
          'Cannot delete the last public list.');
      }
      Lists.remove(listId);
    },
  });
  // Get list of all method names on Lists
  const LISTS_METHODS = _.pluck([
    insert,
    makePublic,
    makePrivate,
    updateName,
    remove,
  ], 'name');
  if (Meteor.isServer) {
    // Only allow 5 list operations per connection per second
    DDPRateLimiter.addRule({
      name(name) {
        return _.contains(LISTS_METHODS, name);
      },
      // Rate limit per connection ID
      connectionId() { return true; },
    }, 5, 1000);
  }

/* SERVER-SIDE PUBLICATION */
  import { Meteor } from 'meteor/meteor';
  import { Lists } from '../lists.js';
  // Public lists, as defined by those w/o userId, publishing all publicFields
  Meteor.publish('lists.public', function listsPublic() {
    return Lists.find({
      userId: { $exists: false },
    }, {
      fields: Lists.publicFields,
    });
  });
  // Private lists, where logged-in user = the userId of the List
  Meteor.publish('lists.private', function listsPrivate() {
    if (!this.userId) {
      return this.ready();
    }
    return Lists.find({
      userId: this.userId,
    }, {
      fields: Lists.publicFields,
    });
  });
