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
    // assign worker to user for latency compensation
    'linkWorkerToUser'(_id, usrId) {
      if(Meteor.userId() !== usrId) {
        throw new Meteor.Error('not-authorized');
      }
      check(_id, String);
      check(usrId, String);
      Collections.Workers.update(_id, {$set:{userId: usrId}});
    }
  });
}
