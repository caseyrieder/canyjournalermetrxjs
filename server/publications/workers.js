import {Workers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for publishing Workers collection
export default function () {
  // Publish all workers w/unspecified selector, sort revChronol
  Meteor.publish('workers.all', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, role: 1, employer: 1},
      sort: {createdAt: -1}
    };
    return Workers.find(selector, options);
  });
  // Publish single worker from workerId
  Meteor.publish('workers.single', function (workerId) {
    check(workerId, String);
    const selector = {_id: workerId};
    return Workers.find(selector);
  });
  // Publish all workers for a single employer
  Meteor.publish('workers.company', function (employer) {
    check(employer, String);
    const selector = {employer};
    return Workers.find(selector);
  });
  // Publish all workers for a single buildingId
  Meteor.publish('workers.building', function (buildingId) {
    check(buildingId, String);
    const selector = {buildingId};
    return Workers.find(selector);
  });
  // Publish all workers for a single inspectionId
  Meteor.publish('workers.inspection', function (inspectionId) {
    check(inspectionId, String);
    const selector = {inspectionId};
    return Workers.find(selector);
  });
}
