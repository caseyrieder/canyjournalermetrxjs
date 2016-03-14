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
    'linkWorkerToUser'(_id, usrId) {
      if(Meteor.userId() !== usrId) {
        throw new Meteor.Error('not-authorized');
      }
      check(_id, String);
      check(usrId, String);
      Workers.update(_id, {$set:{userId: usrId}});
    }
  });
}
