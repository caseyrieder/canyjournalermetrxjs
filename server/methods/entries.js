import {Entries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Entries collection
export default function() {
  Meteor.methods({
    //Check args, add date, insert into collection
    'entries.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);
      const createdAt = new Date();
      const entry = {_id, title, content, createdAt};
      Entries.insert(entry);
    }
  });
}
