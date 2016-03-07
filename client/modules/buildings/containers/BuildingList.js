import BuildingList from '../components/BuildingList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to buildings & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('buildings.list').ready()) {
    const buildings = Collections.Buildings.find().fetch();
    onData(null, {buildings});
  }
};
// Komposer sends Buildings collection data to BuildingList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(BuildingList);
