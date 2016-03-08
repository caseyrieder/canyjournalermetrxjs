import {Buildings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for publishing Buildings collection
export default function () {
  // Publish all buildings w/unspecified selector, sort revChronol
  Meteor.publish('buildings.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, address: 1, projectCode: 1},
      sort: {createdAt: -1}
    };
    return Buildings.find(selector, options);
  });
  // Publish single building from buildingId
  Meteor.publish('buildings.single', function (buildingId) {
    check(buildingId, String);
    const selector = {_id: buildingId};
    return Buildings.find(selector);
  });
}
