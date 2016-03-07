import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Create single-inspection component for each {inspection} object
const Inspection = ({inspection}) => (
  <Grid>
    <Row>
      {inspection.saving ? <p>Saving...</p> : null}
      <Col xs={6} xsOffset={3} className='text-center'>
        <h2>{inspection.title}</h2>
        <p>{inspection.content}</p>
        <p className='inspection-date'>{moment(inspection.createdAt).format("MMM D, h:m")}</p>
      </Col>
    </Row>
  </Grid>
);
// Export single-inspection component
export default Inspection;
