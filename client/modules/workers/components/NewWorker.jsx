import React from 'react';
import { Col, Panel, Input, ButtonInput, Glyphicon } from 'react-bootstrap';
// Render new-worker form & handle error & newWorker btn
class NewWorker extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Add Worker</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref="name" type="text" placeholder="Worker name..." />
            <Input ref="role" type="textarea" placeholder="role..." />
            <ButtonInput onClick={this.newWorker.bind(this)} bsStyle="primary" type="submit" value="Add" />
          </form>
        </Panel>
      </Col>
    )
  }

  newWorker(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, role} = this.refs;
    create(name.getValue(), role.getValue());
    name.getInputDOMNode().value = '';
    role.getInputDOMNode().value = '';
  }
}
// Export new-worker form component
export default NewWorker;
