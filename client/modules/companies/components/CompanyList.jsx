import React from 'react';
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// Create company-list component for all companies
const CompanyList = ({companies}) => (
  <Col xs={12} sm={6} smOffset={3}>
    <ListGroup className='companylist'>
      {companies.map(company => (
        <ListGroupItem key={company._id}>
          <a href={`/company/${company._id}`}>{company.name}</a>
        </ListGroupItem>
      ))}
    </ListGroup>
    <Button bsStyle="primary" className="text-center" href="/new-company">New Company</Button>
  </Col>
);
// Export company-list component
export default CompanyList;
