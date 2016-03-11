import {Workers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Workers collection
export default function () {
  Meteor.methods({
    // Check args, add date, insert into collection
    'workers.create'(_id, name, role, employer) {
      check(_id, String);
      check(name, String);
      check(role, String);
      check(employer, String);
      const createdAt = new Date();
      const worker = {_id, name, role, employer, createdAt};
      Workers.insert(worker);
    }
  });
}
