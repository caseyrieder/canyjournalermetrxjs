import {Inspections} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for publishing Inspections collection
export default function () {
  // Publish all inspections w/unspecified selector, sort revChronol
  Meteor.publish('inspections.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1, content: 1},
      sort: {createdAt: -1}
    };
    return Inspections.find(selector, options);
  });
  // Publish single inspection from inspectionId
  Meteor.publish('inspections.single', function (inspectionId) {
    check(inspectionId, String);
    const selector = {_id: inspectionId};
    return Inspections.find(selector);
  });
}
