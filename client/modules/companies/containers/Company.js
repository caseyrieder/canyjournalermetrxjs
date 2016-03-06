import Company from '../components/Company.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
// Set state, subscribe to 1-Company & send as variable to composer
export const composer = ({context, companyId}, onData) => {
  const {Meteor, Collections} = context();
  // If companies.single subscription is not ready, try via companies sub
  if (Meteor.subscribe('companies.single', companyId).ready()) {
    const company = Collections.Companies.findOne(companyId);
    onData(null, {company});
  } else {
    const company = Collections.Companies.findOne(companyId);
    if (company) {
      onData(null, {company});
    } else {
      onData();
    }
  }
};
// Komposer sends Companies collection data to CompanyList component
export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Company);
