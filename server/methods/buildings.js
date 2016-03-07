import {Buildings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// Handle methods for manipulating Buildings collection
export default function() {
  Meteor.methods({
    //Check args, add date, insert into collection
    'buildings.create'(_id, address, projectCode) {
      check(_id, String);
      check(address, String);
      check(projectCode, String);
      const createdAt = new Date();
      const building = {_id, address, projectCode, createdAt};
      Buildings.insert(building);
    }
  });
}
