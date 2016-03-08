import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'companies.create'(_id, name, specialty) {
      // Check arguments
      check(_id, String);
      check(name, String);
      check(specialty, String);
      // Add date
      const createdAt = new Date();
      // create newcompany object
      const company = {
        _id, name, specialty, createdAt,
        saving: true
      };
      // Insert new company into collection
      Collections.Companies.insert(company);
    }
  });
  // // Run 'insert' with Predefined company
  // Meteor.methods({
  //   'companies.addEmployee'(_id, companyId, name, role) {
  //     check(_id, String);
  //     check(companyId, String);
  //     check(name, String);
  //     check(role, String);
  //
  //     const createdAt = new Date();
  //     const worker = {
  //       _id, companyId, name, role, createdAt,
  //       saving: true
  //     };
  //     Collections.Workers.insert(worker);
  //   }
  // });
}
