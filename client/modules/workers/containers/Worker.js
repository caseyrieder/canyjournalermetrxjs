import Worker from '../components/Worker.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to 1-Worker & send as variable to composer
export const composer = ({context, workerId}, onData) => {
  const {Meteor, Collections} = context();
  // If workers.single subscription is not ready, try via workers sub
  if (Meteor.subscribe('workers.single', workerId).ready()) {
    const worker = Collections.Workers.findOne(workerId);
    onData(null, {worker});
  } else {
    const worker = Collections.Workers.findOne(workerId);
    if (worker) {
      onData(null, {worker});
    } else {
      onData();
    }
  }
};
// Komposer sends Workers collection data to WorkerList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Worker);
