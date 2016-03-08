import React from 'react';
import NewCompany from '../containers/NewCompany.js';
// Create company-list component for all companies
const CompanyList = ({companies}) => (
  <div>
    <NewCompany />
    <ul className='companylist'>
      {companies.length === 0 ? <p>No companies yet!</p> : null}
      {companies.map(company => (
        <li key={company._id} className='company'>
          <a href={`/company/${company._id}`}><b>{company.name}</b></a>
        </li>
      ))}
    </ul>
  </div>
);
// Export company-list component
export default CompanyList;
