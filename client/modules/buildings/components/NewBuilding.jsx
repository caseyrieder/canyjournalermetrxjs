import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
// Render new-building form & handle error & newBuilding btn
class NewBuilding extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Add Building</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="address" type="text" placeholder="Building address..." />
            <Input ref="projectCode" type="textarea" placeholder="projectCode..." />
            <ButtonInput onClick={this.newBuilding.bind(this)} bsStyle="primary" type="submit" value="Add" />
          </form>
        </Panel>
      </Col>
    )
  }

  newBuilding(e) {
    e.preventDefault();
    const {create} = this.props;
    const {address, projectCode} = this.refs;
    create(address.getValue(), projectCode.getValue());
    address.getInputDOMNode().value = '';
    projectCode.getInputDOMNode().value = '';
  }
}
// Export new-building form component
export default NewBuilding;
