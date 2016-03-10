import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const Workers = new Mongo.Collection('workers');

Workers.schema = new SimpleSchema({
  companyId: {
    type: String,
    label: 'Company',
    optional: true
  },
  name: {
    type: String,
    label: 'Name'
  },
  role: {
    type: String,
    label: 'Role'
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      return new Date();
    }
  },
  lastUpdate: {
    type: Date,
    optional: true
  },
  buildingIds: {
    type: [String],
    optional: true
  },
  inspectionIds: {
    type: [String],
    optional: true
  }
});

Workers.attachSchema(Workers.schema);
