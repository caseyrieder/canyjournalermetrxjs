import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Panel, Input, ButtonInput, Glyphicon} from 'react-bootstrap';
import BuildingSelect from '../../buildings/containers/BuildingSelect.js';
import CompanyMultiSelect from '../../companies/containers/CompanyMultiSelect.js';
import WorkerMultiSelect from '../../workers/containers/WorkerMultiSelect.js';
// Render new-inspection form & handle error & newInspection btn
class NewInspection extends React.Component {
  render() {
    const {error, inspNum} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <BuildingSelect />
            <ButtonInput onClick={this.newInspection.bind(this)} bsStyle='primary' type='submit' value='Start Inspection'/>
            <Input ref='inspNum' type='text' value={!inspNum ? null : inspNum}/>
          </form>
          {/* get array values & change subscription based on bldgId, then companyIds */}
          <form>
            <CompanyMultiSelect ref='companyIds' />
            <WorkerMultiSelect ref='workerIds' />
          </form>
          {/* Use momentjs as initial value */}
          <form>
            <Input ref='date' type='text' placeholder='Date...' />
            <Input ref='time' type='text' placeholder='Time...' />
          </form>
          {/* Use weather API */}
          <form>
            <Input ref='weather' type='text' placeholder='Weather...' />
            <Input ref='temp' type='text' placeholder='35F...' />
          </form>
        </Panel>
      </Col>
    )
  }

   newInspection(e) {
     e.preventDefault();
     const {create} = this.props;
    //  console.log(buildingId.getValue());
    //  create(buildingId.getValue());
   }
 }
// Export new-inspection form component
export default NewInspection;
