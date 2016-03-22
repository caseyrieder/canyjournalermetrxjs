import React from 'react';
import NewBuilding from '../containers/NewBuilding.js';
import BuildingList from '../containers/BuildingList.js';
// Create Buildings component for all Buildings
class Buildings extends React.Component {
  render() {
    return (
      <div>
        <h2>New Building</h2>
        <NewBuilding />
        <h2>All Buildings</h2>
        <BuildingList />
      </div>
    );
  }
}
// Export Buildings component
export default Buildings;
