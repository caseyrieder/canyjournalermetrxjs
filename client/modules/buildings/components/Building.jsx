import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Create single-building component for each {building} object
const Building = ({building}) => (
  <Grid>
    <Row>
      {building.saving ? <p>Saving...</p> : null}
      <Col xs={6} xsOffset={3} className='text-center'>
        <h2>{building.address}</h2>
        <p>{building.projectCode}</p>
        <p className='building-date'>{moment(building.createdAt).format("MMM D")}</p>
      </Col>
    </Row>
  </Grid>
);
// Export single-building component
export default Building;
