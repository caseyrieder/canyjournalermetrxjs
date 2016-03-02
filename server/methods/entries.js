import {Entries} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Entries collection
export default function() {
  Meteor.methods({
    //Check text string, add date, insert into collection
    'entries.create'(text){
       check(text, String);
       const createdAt = new Date();
       const entry = {text, createdAt};
       Entries.insert(entry);
    }
  });
}
