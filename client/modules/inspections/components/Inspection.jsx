import React from 'react';
import moment from 'moment';
// Create single-inspection component for each {inspection} object
const Inspection = ({inspection}) => (
  <div>
    {inspection.saving ? <p>Saving...</p> : null}
    <div className='text-center'>
      <h2>{inspection.title}</h2>
      <p>{inspection.content}</p>
      <p className='inspection-date'>{moment(inspection.createdAt).format('MMM D, h:m')}</p>
    </div>
  </div>
);
// Export single-inspection component
export default Inspection;
