import {Workers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Workers collection
export default function () {
  Meteor.methods({
    // Create new worker
    'addWorker'(_id, name, role, employer) {
      // Ensure user is logged in
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      check(_id, String);
      check(name, String);
      check(role, String);
      check(employer, String);
      const createdAt = new Date();
      const worker = {_id, name, role, employer, createdAt};
      Workers.insert(worker);
    },
    // Link worker & user
    'workers.linkToUser'({_id, usrId}) {
      new SimpleSchema({
        _id: {type: String},
        userId: {type: String}
      }).validate({_id, usrId});

      if(Meteor.userId() !== usrId) {
        throw new Meteor.Error('not-authorized');
      }

      Workers.update(_id, {
        $set :{userId: usrId}
      });
    },
    // Link worker to building
    'workers.linktoBldg'({_id, bldgId}) {
      new SimpleSchema({
        _id: {type: String},
        bldgId: {type: String}
      }).validate({_id, bldgId});

      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }

      Workers.update(_id, {
        $push: {buildings: bldgId}
      });
    },
    // Link worker to building
    'workers.linktoInsp'({_id, inspId}) {
      new SimpleSchema({
        _id: {type: String},
        inspId: {type: String}
      }).validate({_id, inspId});
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      Workers.update(_id, {
        $push: {inspections: inspId}
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
      Workers.update(_id, {
        $pull: {inspections: inspId}
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
      Workers.update(_id, {
        $pull: {buildings: bldgId}
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
      Workers.update(_id, {
        $pull: {employer: employer}
      });
    }
  });
}
