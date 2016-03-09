import React from 'react';
import NewCompany from '../containers/NewCompany.js';
import CompanyList from '../containers/CompanyList.js';
// Create Companies component for all Companies
class Companies extends React.Component {
  render() {
    return (
      <div>
        <h2>New Company</h2>
        <NewCompany />
        <h2>All Companies</h2>
        <CompanyList />
      </div>
    );
  }
}
// Export Companies component
export default Companies;
