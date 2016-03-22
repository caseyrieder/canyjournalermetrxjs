import React from 'react';
import {Input} from 'react-bootstrap';
// Create company-list component for all companies
const CompanySelect = ({companies}) => (
  <Input type="select" label="company" placeholder="Choose company...">
    {companies.map(company => (
      <option key={company._id} value={company._id}>
        {company.name}
      </option>
    ))}
  </Input>
);
// Export company-list component
export default CompanySelect;
