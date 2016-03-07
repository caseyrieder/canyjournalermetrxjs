import Inspection from '../components/Inspection.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to 1-Inspection & send as variable to composer
export const composer = ({context, inspectionId}, onData) => {
  const {Meteor, Collections} = context();
  // If inspections.single subscription is not ready, try via inspections sub
  if (Meteor.subscribe('inspections.single', inspectionId).ready()) {
    const inspection = Collections.Inspections.findOne(inspectionId);
    onData(null, {inspection});
  } else {
    const inspection = Collections.Inspections.findOne(inspectionId);
    if (inspection) {
      onData(null, {inspection});
    } else {
      onData();
    }
  }
};
// Komposer sends Inspections collection data to InspectionList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Inspection);
