import BuildingSelect from '../components/BuildingSelect.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to buildings & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const worksite = LocalState.get('CHOSEN_SITE');
  if (Meteor.subscribe('buildings.all').ready()) {
    const buildings = Collections.Buildings.find().fetch();
    onData(null, {buildings, worksite});
  }
};
// Map action dependencies into context
export const depsMapper = (context, actions) => ({
  selectOne: actions.buildings.selectOne,
  context: () => context
});
// Komposer sends Buildings collection data to BuildingSelect component
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(BuildingSelect);
