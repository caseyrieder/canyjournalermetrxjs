import CompanyMultiSelect from '../components/CompanyMultiSelect.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to companies & send as variable to composer
export const composer = ({context, clearErrors}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('companies.all').ready()) {
    const companies = Collections.Companies.find().fetch();
    onData(null, {companies});
  } else {
    onData();
  }
};
// Map action dependencies into context
export const depsMapper = (context, actions) => ({
  checkCompany: actions.inspections.addCompany,
  clearErrors: actions.companies.clearErrors,
  context: () => context
});
// Komposer sends Companies collection data to CompanyList component
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CompanyMultiSelect);
