import React from 'react';
import moment from 'moment';
// Create single-worker component for each {worker} object
const Worker = ({worker}) => (
  <div>
    {worker.saving ? <p>Saving...</p> : null}
    <div className='text-center'>
      <h2>{worker.name}</h2>
      <p>{worker.role} at {worker.employer}</p>
      <p className='worker-date'>{moment(worker.createdAt).format('MMM D')}</p>
    </div>
  </div>
);
// Export single-worker component
export default Worker;
