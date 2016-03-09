import React from 'react';
// Render login component & handle loginUser for onClick btn
class Register extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <h1>Register</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='name' type='text' placeholder='Full name'/>
          <input ref='email' type='email' placeholder='Email'/>
          <input ref='password' type='password' placeholder='Password'/>
          <button onClick={this.signUp.bind(this)} type='submit'>Login</button>
        </form>
      </div>
    );
  }

  signUp(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, role, email, password} = this.refs;
    create(name.value, role.value, email.value, password.value);
    name.value = '';
    email.value = '';
    password.value = '';
  }
}
// Export the new user Registration form component
export default Register;
