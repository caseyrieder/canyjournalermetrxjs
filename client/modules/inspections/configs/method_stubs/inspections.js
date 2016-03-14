import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  // Run 'insert' for latency compensation
  Meteor.methods({
    'inspections.create'(_id, buildingId, title, content) {
      // Check arguments
      check(_id, String);
      check(buildingId, String);
      check(title, String);
      check(content, String);
      // Add date
      const createdAt = new Date();
      // create newinspection object
      const inspection = {
        _id, buildingId, title, content, createdAt,
        saving: true
      };
      // Insert new inspection into collection
      Collections.Inspections.insert(inspection);
    },
    // Add company to inspection
    'inspections.addCompanies'({_id, compIds}) {
      new SimpleSchema({
        _id: {type: String},
        compIds: {type: [String]}
      }).validate({_id, compIds});

      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      Collections.Inspections.update(_id, {
        $addToSet: {companies: {$each: compIds}},
        updating: true
      });
    },
    // Link worker to inspection
    'workers.linktoInsp'({_id, inspId}) {
      new SimpleSchema({
        _id: {type: String},
        inspId: {type: String}
      }).validate({_id, inspId});
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      Collections.Inspections.update(_id, {
        $push: {inspections: inspId},
        updating: true
      });
    },
    // Remove worker from inspection
    'workers.unlinkFromInsp'({_id, inspId}) {
      new SimpleSchema({
        _id: {type: String},
        inspId: {type: String}
      }).validate({_id, inspId});
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      Collections.Inspections.update(_id, {
        $pull: {inspections: inspId},
        updating: true
      });
    },
    // Remove worker from bldg
    'workers.unlinkFromBldg'({_id, bldgId}) {
      new SimpleSchema({
        _id: {type: String},
        bldgId: {type: String}
      }).validate({_id, bldgId});
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      Collections.Inspections.update(_id, {
        $pull: {buildings: bldgId},
        updating: true
      });
    },
    // Remove worker from bldg
    'workers.unlinkFromEmployer'({_id, employer}) {
      new SimpleSchema({
        _id: {type: String},
        employer: {type: String}
      }).validate({_id, employer});
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      Collections.Inspections.update(_id, {
        $pull: {employer: employer},
        updating: true
      });
    }
  });
}
