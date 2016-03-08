import React from 'react';
// Create building-list component for all buildings
const BuildingList = ({buildings}) => (
  <div>
    <ul className='buildinglist'>
      {buildings.map(building => (
        <li key={building._id}>
          <a href={`/building/${building._id}`}>{building.address}</a>
        </li>
      ))}
    </ul>
    <button className="text-center" href="/new-building">New Building</button>
  </div>
);
// Export building-list component
export default BuildingList;
