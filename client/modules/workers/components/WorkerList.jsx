import React from 'react';
import NewWorker from '../containers/NewWorker.js';
// Create worker-list component for all workers
const WorkerList = ({workers}) => (
  <div className='workers'>
    <div>
      <NewWorker />
    </div>
    <ul className='worker-list'>
      {workers.length === 0 ? <p>No workers yet!</p> : null}
      {workers.map(worker => (
        <li key={worker._id} className='worker'>
          <a href={`/worker/${worker._id}`}><b>{worker.name}</b></a>
        </li>
      ))}
    </ul>
  </div>
);
// Export worker-list component
export default WorkerList;
