import {Entries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for publishing Entries collection
export default function () {
  // Publish all entries w/unspecified selector, sort revChronol
  Meteor.publish('entries.list', function() {
    const selector = {};
    const options = {
      fields: {_id: 1, text: 1},
      sort: {createdAt: -1}
    };
    return Entries.find(selector, options);
  });
  // Publish single entry from entryId
  Meteor.publish('entries.single', function(entryId) {
    check(entryId, String);
    const selector = {_id: entryId};
    return Entries.find(selector);
  });
}
