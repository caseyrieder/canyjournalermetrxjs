import {Workers} from '/lib/collections';
// import {Workers} from '/lib/workers';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Workers collection
export default function () {
  Meteor.methods({
    // Check args, add date, insert into collection
    'workers.create'(_id, name, role, companyId, userId) {
      check(_id, String);
      check(name, String);
      check(role, String);
      check(companyId, String);
      check(userId, String);
      const createdAt = new Date();
      const worker = {_id, name, role, companyId, userId, createdAt};
      Workers.insert(worker);
    }
  });
}
