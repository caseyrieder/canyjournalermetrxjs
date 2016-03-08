import React from 'react';
// Create employee-list component for all workers of a given company
const EmployeeList = ({workers, companyId}) => (
  <div className="employees">
    <div className="employee-list">
      {workers.length === 0 ? <p>No employees yet!</p> : null}
      {workers.map(worker => (
        <div key={worker._id} className="worker">
          <a href={`/worker/${worker._id}`}><b>{worker.name}</b></a>
        </div>
      ))}
    </div>
  </div>
);
// Export employee-list component
export default EmployeeList;
