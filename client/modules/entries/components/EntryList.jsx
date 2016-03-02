import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
// Create entry-list component for all entries
const EntryList = ({entries}) => (
  <Grid>
    <Row>
      {entries.map(entry => (
        <Col xs={3} key={entry._id}>
          <Panel>
            <p>{entry.title}</p>
            <a href={`/entry/${entry._id}`}>View Entry</a>
          </Panel>
        </Col>
      ))}
    </Row>
  </Grid>
);
// Export entry-list component
export default EntryList;
