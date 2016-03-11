// import {Mongo} from 'meteor/mongo';
// import {SimpleSchema} from 'meteor/aldeed:simple-schema';
//
// export const Workers = new Mongo.Collection('workers');
//
// Workers.schema = new SimpleSchema({
//   name: {
//     type: String,
//     label: 'Name'
//   },
//   role: {
//     type: String,
//     label: 'Role'
//   },
//   companyId: {
//     type: String,
//     label: 'companyId',
//     optional: true
//   },
//   userId: {
//     type: String,
//     optional: true
//   },
//   createdAt: {
//     type: Date,
//     autoValue: function() {
//       return new Date();
//     }
//   },
//   lastUpdate: {
//     type: Date,
//     optional: true
//   },
//   buildings: {
//     type: [String],
//     optional: true
//   },
//   inspections: {
//     type: [String],
//     optional: true
//   }
// });
//
// Workers.attachSchema(Workers.schema);
