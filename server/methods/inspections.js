import {Inspections} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Inspections collection
export default function () {
  Meteor.methods({
    // Check args, add date, insert into collection
    'inspections.create'(_id, buildingId, title, content) {
      check(_id, String);
      check(buildingId, String);
      check(title, String);
      check(content, String);
      const createdAt = new Date();
      const inspection = {_id, buildingId, title, content, createdAt};
      Inspections.insert(inspection);
    }
  });
}
