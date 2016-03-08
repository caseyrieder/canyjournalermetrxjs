import {Workers} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for publishing Workers collection
export default function () {
  // Publish all workers w/unspecified selector, sort revChronol
  Meteor.publish('workers.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, role: 1},
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
}