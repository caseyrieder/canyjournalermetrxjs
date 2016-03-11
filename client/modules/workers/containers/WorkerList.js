import WorkerList from '../components/WorkerList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to workers & send as variable to composer
export const composer = ({context, clearErrors, employer}, onData) => {
  const {Meteor, Collections} = context();
  if (employer) {
    if (Meteor.subscribe('workers.company', employer).ready()) {
      const options = {
        sort: {name: 1}
      };
      const workers = Collections.Workers.find({employer}, options).fetch();
      onData(null, {workers});
    } else {
      onData();
    }
  } else {
    if (Meteor.subscribe('workers.all').ready()) {
      const workers = Collections.Workers.find().fetch();
      onData(null, {workers});
    } else {
      onData();
    }
  }
};
// Komposer sends Workers collection data to EmployeeList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(WorkerList);
