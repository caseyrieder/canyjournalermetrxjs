import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
// Render new-entry form & handle error & newEntry btn
class NewEntry extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Add Entry</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="text" type="textarea" placeholder="Your entry..." />
            <ButtonInput onClick={this.newEntry.bind(this)} bsStyle="primary" type="submit" value="Add" />
          </form>
        </Panel>
      </Col>
    )
  }

  newEntry(e) {
    e.preventDefault();
    const {create} = this.props;
    const {text} = this.refs;
    create(text.getValue());
    text.getInputDOMNode().value = '';
 }
}
// Export snew-entry form component
export default NewEntry;
