import {Companies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for publishing Companies collection
export default function () {
  // Publish all companies w/unspecified selector, sort revChronol
  Meteor.publish('companies.all', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, name: 1, specialty: 1},
      sort: {createdAt: -1}
    };
    return Companies.find(selector, options);
  });
  // Publish single company from companyId
  Meteor.publish('companies.single', function (companyId) {
    check(companyId, String);
    const selector = {_id: companyId};
    return Companies.find(selector);
  });
}
