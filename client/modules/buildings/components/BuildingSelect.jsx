import React from 'react';
import {Input} from 'react-bootstrap';
// Create company-list component for all companies
class BuildingSelect extends React.Component {
  render() {
    const {buildings, worksite} = this.props;
    return (
      <Input type='select' ref='site' label='Worksite' placeholder='Choose...' onChange={this.handleChange.bind(this)}>
        {buildings.map(building => (
          <option key={building._id} value={building._id}>
            {building.address}
          </option>
        ))}
      </Input>
    )
  }

  handleChange(e) {
    e.preventDefault();
    const {selectOne} = this.props;
    const {site} = this.refs;
    console.log(site.getValue());
    selectOne(site.getValue());
  }
}
// Export company-list component
export default BuildingSelect;
