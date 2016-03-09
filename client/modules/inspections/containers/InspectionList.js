import InspectionList from '../components/InspectionList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to inspections & send as variable to composer
export const composer = ({context, clearErrors, buildingId}, onData) => {
  const {Meteor, Collections} = context();
  if (buildingId) {
    if (Meteor.subscribe('inspections.building', buildingId).ready()) {
      const options = {
        sort: {createdAt: -1}
      };
      const inspections = Collections.Inspections.find({buildingId}, options).fetch();
      onData(null, {inspections});
    } else {
      onData();
    }
  } else {
    if (Meteor.subscribe('inspections.all').ready()) {
      const inspections = Collections.Inspections.find().fetch();
      onData(null, {inspections});
    } else {
      onData();
    }
  }
};
// Komposer sends Inspections collection data to InspectionList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(InspectionList);
