import React from 'react';
import WorkerList from '../../workers/containers/WorkerList.js';
import NewWorker from '../../workers/containers/NewWorker.js';
// Create single-company component for each {company} object
const Company = ({company}) => (
  <div className='text-center'>
    {company.saving ? <p>Saving...</p> : null}
    <h2>{company.name}</h2>
    <p>{company.specialty}</p>
    <div>
      <h3>Workers</h3>
      <NewWorker employer={company.name} />
      <WorkerList employer={company.name} />
    </div>
  </div>
);
// Export single-company component
export default Company;
