import InspectionList from '../components/InspectionList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to inspections & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('inspections.list').ready()) {
    const inspections = Collections.Inspections.find().fetch();
    onData(null, {inspections});
  }
};
// Komposer sends Inspections collection data to InspectionList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(InspectionList);
