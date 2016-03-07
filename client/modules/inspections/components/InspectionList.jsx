import React from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// Create inspection-list component for all inspections
const InspectionList = ({inspections}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <ListGroup className='inspectionlist'>
      {inspections.map(inspection => (
        <ListGroupItem key={inspection._id}>
          <a href={`/inspection/${inspection._id}`}>{inspection.title}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
    <Button bsStyle="primary" className="text-center" href="/new-inspection">New Inspection</Button>
  </Col>
);
// Export inspection-list component
export default InspectionList;
