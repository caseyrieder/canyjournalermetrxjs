import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// Create single-company component for each {company} object
const Company = ({company}) => (
  <Grid>
    <Row>
      {company.saving ? <p>Saving...</p> : null}
      <Col xs={6} xsOffset={3} className='text-center'>
        <h2>{company.name}</h2>
        <p>{company.specialty}</p>
        <p className='company-date'>{moment(company.createdAt).format("MMM D")}</p>
      </Col>
    </Row>
  </Grid>
);
// Export single-company component
export default Company;
