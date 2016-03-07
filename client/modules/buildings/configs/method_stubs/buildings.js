import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'buildings.create'(_id, address, projectCode) {
      // Check arguments
      check(_id, String);
      check(address, String);
      check(projectCode, String);
      // Add date
      const createdAt = new Date();
      // create newbuilding object
      const building = {
        _id, address, projectCode, createdAt,
        saving: true
      };
      // Insert new building into collection
      Collections.Buildings.insert(building);
    }
  });
}
