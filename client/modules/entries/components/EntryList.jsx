import React from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// Create entry-list component for all entries
const EntryList = ({entries}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <ListGroup className='entrylist'>
      {entries.map(entry => (
        <ListGroupItem key={entry._id}>
          <a href={`/entry/${entry._id}`}>{entry.title}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
    <Button bsStyle="primary" className="text-center" href="/new-entry">New Inspection</Button>
  </Col>
);
// Export entry-list component
export default EntryList;
