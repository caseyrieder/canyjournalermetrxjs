import React from 'react';
import AddWorker from '../containers/AddWorker.js';
import WorkerList from '../containers/WorkerList.js';
// Create workers component for all workers
class Workers extends React.Component {
  render() {
    return (
      <div>
        <AddWorker />
        <WorkerList />
      </div>
    );
  }
}
// Export workers component
export default Workers;
