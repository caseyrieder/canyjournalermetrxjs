import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'workers.create'(_id, name, role, companyId, userId) {
      // Check arguments
      check(_id, String);
      check(name, String);
      check(role, String);
      check(companyId, String);
      check(userId, String);
      // Add date
      const createdAt = new Date();
      // Create newworker object
      const worker = {
        _id, name, role, companyId, userId, createdAt,
        saving: true
      };
      // Insert new worker into collection
      Collections.Workers.insert(worker);
    }
  });
}
