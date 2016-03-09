import React from 'react';
import NewWorker from '../containers/NewWorker.js';
import WorkerList from '../containers/WorkerList.js';
// Create workers component for all workers
class Workers extends React.Component {
  render() {
    return (
      <div>
        <h2>New Worker</h2>
        <NewWorker />
        <h2>All Workers</h2>
        <WorkerList />
      </div>
    );
  }
}
// Export workers component
export default Workers;
