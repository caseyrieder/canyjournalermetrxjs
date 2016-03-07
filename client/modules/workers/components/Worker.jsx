import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Create single-worker component for each {worker} object
const Worker = ({worker}) => (
  <Grid>
    <Row>
      {worker.saving ? <p>Saving...</p> : null}
      <Col xs={6} xsOffset={3} className='text-center'>
        <h2>{worker.name}</h2>
        <p>{worker.role}</p>
        <p className='worker-date'>{moment(worker.createdAt).format("MMM D")}</p>
      </Col>
    </Row>
  </Grid>
);
// Export single-worker component
export default Worker;
