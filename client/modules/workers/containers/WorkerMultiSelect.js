import WorkerMultiSelect from '../components/WorkerMultiSelect.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to workers & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('workers.all').ready()) {
    const workers = Collections.Workers.find().fetch();
    onData(null, {workers});
  }
};
// Komposer sends Workers collection data to WorkerMultiSlect component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(WorkerMultiSelect);
