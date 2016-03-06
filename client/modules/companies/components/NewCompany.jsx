import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
// Render new-company form & handle error & newCompany btn
class NewCompany extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Add Company</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="name" type="text" placeholder="Company name..." />
            <Input ref="specialty" type="textarea" placeholder="specialty..." />
            <ButtonInput onClick={this.newCompany.bind(this)} bsStyle="primary" type="submit" value="Add" />
          </form>
        </Panel>
      </Col>
    )
  }

  newCompany(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, specialty} = this.refs;
    create(name.getValue(), specialty.getValue());
    name.getInputDOMNode().value = '';
    specialty.getInputDOMNode().value = '';
  }
}
// Export new-company form component
export default NewCompany;
