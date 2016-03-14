import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    // create new worker for latency compensation
    'addWorker'(_id, name, role, employer) {
      // Authorize
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      // Check arguments, add date
      check(_id, String);
      check(name, String);
      check(role, String);
      check(employer, String);
      const createdAt = new Date();
      const worker = {
        _id, name, role, employer, createdAt,
        saving: true
      };
      Collections.Workers.insert(worker);
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
      Collections.Workers.update(_id, {
        $set: {userId: usrId},
        updating: true
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
      Collections.Workers.update(_id, {
        $push: {buildings: bldgId},
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
      Collections.Workers.update(_id, {
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
      Collections.Workers.update(_id, {
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
      Collections.Workers.update(_id, {
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
      Collections.Workers.update(_id, {
        $pull: {employer: employer},
        updating: true
      });
    }
  });
}
