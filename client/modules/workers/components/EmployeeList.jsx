import React from 'react';
// Create employee-list component for all workers of a given company
const EmployeeList = ({workers}) => (
  <div>
    <ul className='employee-list'>
      {workers.length === 0 ? <p>No employees yet!</p> : null}
      {workers.map(worker => (
        <li key={worker._id} className='employee'>
          <a href={`/worker/${worker._id}`}><b>{worker.name}</b></a>
        </li>
      ))}
    </ul>
  </div>
);
// Export employee-list component
export default EmployeeList;
