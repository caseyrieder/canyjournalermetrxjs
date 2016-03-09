import React from 'react';
import NewInspection from '../containers/NewInspection.js';
import InspectionList from '../containers/InspectionList.js';
// Create workers component for all workers
class Inspections extends React.Component {
  render() {
    return (
      <div>
        <h2>New Inspection</h2>
        <NewInspection />
        <h2>All Inspections</h2>
        <InspectionList />
      </div>
    );
  }
}
// Export workers component
export default Inspections;
