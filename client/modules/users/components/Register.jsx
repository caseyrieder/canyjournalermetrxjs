import React from 'react';
import {Col, Panel, Input, ButtonInput, Glyphicon} from 'react-bootstrap';
// Render login component & handle loginUser for onClick btn
class Register extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Register</h1>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <form>
            <Input ref='email' type='email' placeholder='Email'/>
            <Input ref='password' type='password' placeholder='Password'/>
            <ButtonInput onClick={this.signUp.bind(this)} bsStyle='primary' type='submit' value='Login' />
          </form>
        </Panel>
      </Col>
    )
  }

  signUp(e) {
    e.preventDefault();
    const {create} = this.props;
    const {email, password} = this.refs;
    create(email.getValue(), password.getValue());
    email.getInputDOMNode().value = '';
    password.getInputDOMNode().value = '';
  }
}
// Export the new user Registration form component
export default Register;
