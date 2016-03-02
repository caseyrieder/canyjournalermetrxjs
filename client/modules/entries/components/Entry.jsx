import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Create single-entry component for each {entry} object
const Entry = ({entry}) => (
  <Grid>
    <Row>
      <Col xs={6} xsOffset={3}>
        <h2>{entry.title}</h2>
        <p>{entry.text}</p>
      </Col>
    </Row>
  </Grid>
);
// Export single-entry component
export default Entry;
