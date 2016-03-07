import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'inspections.create'(_id, title, content) {
      // Check arguments
      check(_id, String);
      check(title, String);
      check(content, String);
      // Add date
      const createdAt = new Date();
      // create newinspection object
      const inspection = {
        _id, title, content, createdAt,
        saving: true
      };
      // Insert new inspection into collection
      Collections.Inspections.insert(inspection);
    }
  });
}
