import {Mongo} from 'meteor/mongo';
// Export collections
export const Workers = new Mongo.Collection('workers');
export const Companies = new Mongo.Collection('companies');
export const Buildings = new Mongo.Collection('buildings');
export const Inspections = new Mongo.Collection('inspections');
