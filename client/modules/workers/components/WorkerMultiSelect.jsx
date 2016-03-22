import React from 'react';
import {Input} from 'react-bootstrap';
// Create worker-multiselect component for all workers
const WorkerMultiSelect = ({workers}) => (
  <Input type="select" label="Meeting Attendees" multiple>
    {workers.map(worker => (
      <option key={worker._id} value={worker._id}>
        {worker.name}
      </option>
    ))}
  </Input>
);
// Export worker-multiselect component
export default WorkerMultiSelect;
