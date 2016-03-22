import {Inspections} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Inspections collection
export default function () {
  Meteor.methods({
    // Check args, add date, insert into collection
    'inspections.create'(_id, buildingId, inspNum, inspector) {
      check(_id, String);
      check(buildingId, String);
      check(inspNum, Number);
      check(inspector, String);
      const createdAt = new Date();
      const inspection = {_id, buildingId, inspNum, inspector, createdAt};
      Inspections.insert(inspection);
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
      Inspections.update(_id, {
        $addToSet: {companies: {$each: compIds}}
      });
    },
    // // Link worker to building
    // 'workers.linktoBldg'({_id, bldgId}) {
    //   new SimpleSchema({
    //     _id: {type: String},
    //     bldgId: {type: String}
    //   }).validate({_id, bldgId});
    //
    //   if(!Meteor.userId()) {
    //     throw new Meteor.Error('not-authorized');
    //   }
    //
    //   Inspections.update(_id, {
    //     $push: {buildings: bldgId}
    //   });
    // },
    // // Link worker to building
    // 'workers.linktoInsp'({_id, inspId}) {
    //   new SimpleSchema({
    //     _id: {type: String},
    //     inspId: {type: String}
    //   }).validate({_id, inspId});
    //   if(!Meteor.userId()) {
    //     throw new Meteor.Error('not-authorized');
    //   }
    //   Inspections.update(_id, {
    //     $push: {inspections: inspId}
    //   });
    // },
    // // Remove worker from inspection
    // 'workers.unlinkFromInsp'({_id, inspId}) {
    //   new SimpleSchema({
    //     _id: {type: String},
    //     inspId: {type: String}
    //   }).validate({_id, inspId});
    //   if(!Meteor.userId()) {
    //     throw new Meteor.Error('not-authorized');
    //   }
    //   Inspections.update(_id, {
    //     $pull: {inspections: inspId}
    //   });
    // },
    // // Remove worker from bldg
    // 'workers.unlinkFromBldg'({_id, bldgId}) {
    //   new SimpleSchema({
    //     _id: {type: String},
    //     bldgId: {type: String}
    //   }).validate({_id, bldgId});
    //   if(!Meteor.userId()) {
    //     throw new Meteor.Error('not-authorized');
    //   }
    //   Inspections.update(_id, {
    //     $pull: {buildings: bldgId}
    //   });
    // },
    // // Remove worker from bldg
    // 'workers.unlinkFromEmployer'({_id, employer}) {
    //   new SimpleSchema({
    //     _id: {type: String},
    //     employer: {type: String}
    //   }).validate({_id, employer});
    //   if(!Meteor.userId()) {
    //     throw new Meteor.Error('not-authorized');
    //   }
    //   Inspections.update(_id, {
    //     $pull: {employer: employer}
    //   });
    // }
  });
}
