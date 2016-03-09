import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Companies collection
export default function () {
/* Add new company */
  Meteor.methods({
    'companies.create'(_id, name, specialty) {
      // Check args, add date, insert into Companies collection
      check(_id, String);
      check(name, String);
      check(specialty, String);
      const createdAt = new Date();
      const company = {_id, name, specialty, createdAt};
      Companies.insert(company);
    }
  });
}
