import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'workers.create'(_id, companyId, name, role) {
      // Check arguments
      check(_id, String);
      check(companyId, String);
      check(name, String);
      check(role, String);
      // Add date
      const createdAt = new Date();
      // Create newworker object
      const worker = {
        _id, companyId, name, role, createdAt,
        saving: true
      };
      // Insert new worker into collection
      Collections.Workers.insert(worker);
    }
  });
}
