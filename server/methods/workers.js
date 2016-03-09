import {Workers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Workers collection
export default function () {
  Meteor.methods({
    // Check args, add date, insert into collection
    'workers.create'(_id, companyId, name, role) {
      check(_id, String);
      check(companyId, String);
      check(name, String);
      check(role, String);
      const createdAt = new Date();
      const worker = {_id, companyId, name, role, createdAt};
      Workers.insert(worker);
    }
  });
}
