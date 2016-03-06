import {Mongo} from 'meteor/mongo';
// Export collections
export const Entries = new Mongo.Collection('entries');
export const Companies = new Mongo.Collection('companies');
