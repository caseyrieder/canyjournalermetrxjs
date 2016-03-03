import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Create single-entry component for each {entry} object
const Entry = ({entry}) => (
  <Grid>
    <Row>
      {entry.saving ? <p>Saving...</p> : null}
      <Col xs={6} xsOffset={3} className='text-center'>
        <h2>{entry.title}</h2>
        <p>{entry.content}</p>
        <p className='entry-date'>{moment(entry.createdAt).format("MMM D, h:m")}</p>
      </Col>
    </Row>
  </Grid>
);
// Export single-entry component
export default Entry;
