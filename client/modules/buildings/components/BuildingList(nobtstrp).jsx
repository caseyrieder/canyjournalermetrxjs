import React from 'react';
// Create building-list component for all buildings
const BuildingList = ({buildings}) => (
  <div>
    <ul className='buildinglist'>
      {buildings.length === 0 ? <p>No buildings yet!</p> : null}
      {buildings.map(building => (
        <li key={building._id} className='building'>
          <a href={`/building/${building._id}`}><b>{building.address}</b></a>
        </li>
      ))}
    </ul>
  </div>
);
// Export building-list component
export default BuildingList;