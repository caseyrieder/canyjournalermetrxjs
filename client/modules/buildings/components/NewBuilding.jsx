import React from 'react';
import {Col, Panel, Input, ButtonInput, Glyphicon} from 'react-bootstrap';
import CompanyMultiSelect from '../../companies/containers/CompanyMultiSelect.js';
import WorkerMultiSelect from '../../workers/containers/WorkerMultiSelect.js';
// Render new-building form & handle error & newBuilding btn
class NewBuilding extends React.Component {
  render() {
    // Need to figure out a way to assign an array of companies & workers immediately...
    // const companies = [];
    // const workers = [];
    const {error} = this.props;
    return (
      <Col>
        <Panel>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref='address' type='text' placeholder='Building address...' />
            <Input ref='projectCode' type='text' placeholder='ProjectCode...' />
            <CompanyMultiSelect ref='companyIds' />
            <WorkerMultiSelect ref='workerIds' />
            <ButtonInput onClick={this.newBuilding.bind(this)} bsStyle='primary' type='submit' value='Add Building'/>
          </form>
        </Panel>
      </Col>
    )
  }

   newBuilding(e) {
     e.preventDefault();
     const {create} = this.props;
     const {address, projectCode} = this.refs;
     // Need to save the values in these refs to the companies & workers arrays
     create(address.getValue(), projectCode.getValue());
     address.getInputDOMNode().value = '';
     projectCode.getInputDOMNode().value = '';
   }
 }
 // Export new-building form component
 export default NewBuilding;
