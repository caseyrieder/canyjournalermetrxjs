import WorkerList from '../components/WorkerList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to workers & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('workers.list').ready()) {
    const workers = Collections.Workers.find().fetch();
    onData(null, {workers});
  }
};
// Komposer sends a specific company's Workers collection data to WorkerList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(WorkerList);
