import React from 'react';
import NewInspection from '../containers/NewInspection.js';
// Create inspection-list component for all inspections
const InspectionList = ({inspections}) => (
  <div>
    <NewInspection />
    <ul className='inspectionlist'>
      {inspections.length === 0 ? <p>No inspections yet!</p> : null}
      {inspections.map(inspection => (
        <li key={inspection._id} className='inspection'>
          <a href={`/inspection/${inspection._id}`}><b>{inspection.title}</b></a>
        </li>
      ))}
    </ul>
  </div>
);
// Export inspection-list component
export default InspectionList;
