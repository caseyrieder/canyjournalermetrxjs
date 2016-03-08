import React from 'react';
// Create company-list component for all companies
const CompanyList = ({companies}) => (
  <div>
    <ul className='companylist'>
      {companies.map(company => (
        <li key={company._id}>
          <a href={`/company/${company._id}`}>{company.name}</a>
        </li>
      ))}
    </ul>
    <button className='text-center' href='/new-company'>New Company</button>
  </div>
);
// Export company-list component
export default CompanyList;
