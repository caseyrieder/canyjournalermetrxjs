import CompanyList from '../components/CompanyList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to companies & send as variable to composer
export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('companies.list').ready()) {
    const companies = Collections.Companies.find().fetch();
    onData(null, {companies});
  }
};
// Komposer sends Companies collection data to CompanyList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(CompanyList);
