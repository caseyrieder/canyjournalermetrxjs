import React from 'react';
// Render login component & handle loginUser for onClick btn
class Login extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <h1>Login</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='email' type='email' placeholder='Email'/>
          <input ref='password' type='password' placeholder='Password'/>
          <button onClick={this.signIn.bind(this)} type='submit'>Login</button>
        </form>
      </div>
    );
  }

  signIn(e) {
    e.preventDefault();
    const {login} = this.props;
    const {email, password} = this.refs;
    login(email.value, password.value);
    email.value = '';
    password.value = '';
  }
}
// Export the existing user Login form component
export default Login;
