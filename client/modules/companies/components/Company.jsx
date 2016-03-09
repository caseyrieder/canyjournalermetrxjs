import React from 'react';
import EmployeeList from '../../workers/containers/EmployeeList.js';
import AddWorker from '../../workers/containers/AddWorker.js';
// Create single-company component for each {company} object
const Company = ({company}) => (
  <div className='text-center'>
    {company.saving ? <p>Saving...</p> : null}
    <h2>{company.name}</h2>
    <p>{company.specialty}</p>
    <div>
      <h3>Workers</h3>
      <AddWorker companyId={company._id} />
      <EmployeeList companyId={company._id} />
    </div>
  </div>
);
// Export single-company component
export default Company;
