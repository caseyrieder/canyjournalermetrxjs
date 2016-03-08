import EmployeeList from '../components/EmployeeList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to 1-company's workers & send as variable to composer
export const composer = ({context, clearErrors, companyId}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('companies.workers', companyId).ready()) {
    const options = {
      sort: {name: 1}
    };
    const workers = Collections.Workers.find({companyId}, options).fetch();
    onData(null, {workers});
  } else {
    onData();
  }
};
// Komposer sends a specific company's Workers collection data to EmployeeList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(EmployeeList);
