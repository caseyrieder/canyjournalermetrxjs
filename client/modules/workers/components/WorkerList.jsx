import React from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// Create worker-list component for all workers
const WorkerList = ({workers}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <ListGroup className='workerlist'>
      {workers.map(worker => (
        <ListGroupItem key={worker._id}>
          <a href={`/worker/${worker._id}`}>{worker.name}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
    <Button bsStyle="primary" className="text-center" href="/new-worker">New Worker</Button>
  </Col>
);
// Export worker-list component
export default WorkerList;
