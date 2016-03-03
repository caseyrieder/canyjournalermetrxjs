import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'entries.create'(_id, title, content) {
      // Check arguments
      check(_id, String);
      check(title, String);
      check(content, String);
      // Add date
      const createdAt = new Date();
      // create newentry object
      const entry = {
        _id, title, content, createdAt,
        saving: true
      };
      // Insert new entryinto collection
      Collections.Entries.insert(entry);
    }
  });
}
