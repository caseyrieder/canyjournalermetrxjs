import React from 'react';
import {Input} from 'react-bootstrap';
// Create company-multiselector component for all companies
class CompanyMultiSelect extends React.Component {
  render() {
    const {companies, firms} = this.props;
    return (
      <Input type='select' ref='picked' label='Contractors' placeholder='Choose...' onChange={this.handleChange.bind(this)} multiple>
        {companies.map(company => (
          <option key={company._id} value={company._id}>
            {company.name}
          </option>
        ))}
      </Input>
    )
  }

  handleChange(e) {
    e.preventDefault();
    const {selectMany} = this.props;
    const {picked} = this.refs;
    console.log(picked.getValue());
    selectMany(picked.getValue());
  }
}
// Export company-multiselector component
export default CompanyMultiSelect;
