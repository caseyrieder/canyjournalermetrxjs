import CompanyMultiSelect from '../components/CompanyMultiSelect.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to companies & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const firms = LocalState.get('CHOSEN_COMPANIES');
  if (Meteor.subscribe('companies.all').ready()) {
    const companies = Collections.Companies.find().fetch();
    onData(null, {companies, firms});
  }
};
// Map action dependencies into context
export const depsMapper = (context, actions) => ({
  selectMany: actions.companies.selectMany,
  context: () => context
});
// Komposer sends Companies collection data to CompanyMultiSelect component
export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CompanyMultiSelect);
