import React from 'react';
import InspectionList from '../../inspections/containers/InspectionList.js';
// import NewInspection from '../../inspections/containers/NewInspection.js';
// Create single-building component for each {building} object
const Building = ({building}) => (
  <div className='text-center'>
    {building.saving ? <p>Saving...</p> : null}
    <h2>{building.address}</h2>
    <p>{building.projectCode}</p>
    <div>
      <h3>Inspections</h3>
      {/*<NewInspection buildingId={building._id} />*/}
      <InspectionList buildingId={building._id} />
    </div>
  </div>
);
// Export single-building component
export default Building;
