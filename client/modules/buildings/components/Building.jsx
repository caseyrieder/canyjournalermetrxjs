import React from 'react';
import moment from 'moment';
// Create single-building component for each {building} object
const Building = ({building}) => (
  <div>
    {building.saving ? <p>Saving...</p> : null}
    <div className='text-center'>
      <h2>{building.address}</h2>
      <p>{building.projectCode}</p>
      <p className='building-date'>{moment(building.createdAt).format('MMM D')}</p>
    </div>
  </div>
);
// Export single-building component
export default Building;
