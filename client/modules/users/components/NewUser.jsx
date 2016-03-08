import React from 'react';
// Render login component & handle loginUser for onClick btn
class NewUser extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <h1>Register</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='email' type='email' placeholder='Email'/>
          <input ref='password' type='password' placeholder='Password'/>
          <button onClick={this.createUser.bind(this)} type='submit'>Login</button>
        </form>
      </div>
    );
  }

  createUser(e) {
    e.preventDefault();
    const {create} = this.props;
    const {email, password} = this.refs;
    create(email.value, password.value);
    email.value = '';
    password.value = '';
  }
}
// Export the new user Registration form component
export default NewUser;
