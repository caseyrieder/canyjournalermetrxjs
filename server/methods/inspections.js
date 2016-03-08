import {Inspections} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Inspections collection
export default function () {
  Meteor.methods({
    // Check args, add date, insert into collection
    'inspections.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);
      const createdAt = new Date();
      const inspection = {_id, title, content, createdAt};
      Inspections.insert(inspection);
    }
  });
}
