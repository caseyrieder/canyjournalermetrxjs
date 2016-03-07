import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
// Render new-inspection form & handle error & newInspection btn
class NewInspection extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Add Inspection</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="title" type="text" placeholder="Inspection title..." />
            <Input ref="content" type="textarea" placeholder="Your inspection..." />
            <ButtonInput onClick={this.newInspection.bind(this)} bsStyle="primary" type="submit" value="Add" />
          </form>
        </Panel>
      </Col>
    )
  }

  newInspection(e) {
    e.preventDefault();
    const {create} = this.props;
    const {title, content} = this.refs;
    create(title.getValue(), content.getValue());
    title.getInputDOMNode().value = '';
    content.getInputDOMNode().value = '';
  }
}
// Export new-inspection form component
export default NewInspection;
