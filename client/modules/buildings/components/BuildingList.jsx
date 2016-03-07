import React from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// Create building-list component for all buildings
const BuildingList = ({buildings}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <ListGroup className='buildinglist'>
      {buildings.map(building => (
        <ListGroupItem key={building._id}>
          <a href={`/building/${building._id}`}>{building.address}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
    <Button bsStyle="primary" className="text-center" href="/new-building">New Building</Button>
  </Col>
);
// Export building-list component
export default BuildingList;
