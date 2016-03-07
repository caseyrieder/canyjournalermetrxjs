import Building from '../components/Building.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to 1-Building & send as variable to composer
export const composer = ({context, buildingId}, onData) => {
  const {Meteor, Collections} = context();
  // If buildings.single subscription is not ready, try via buildings sub
  if (Meteor.subscribe('buildings.single', buildingId).ready()) {
    const building = Collections.Buildings.findOne(buildingId);
    onData(null, {building});
  } else {
    const building = Collections.Buildings.findOne(buildingId);
    if (building) {
      onData(null, {building});
    } else {
      onData();
    }
  }
};
// Komposer sends Buildings collection data to BuildingList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Building);
