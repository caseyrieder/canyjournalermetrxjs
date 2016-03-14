import React from 'react';
// Render PasswordReset component & handle??
class PasswordReset extends React.Component {
  render() {
    const {error, userId} = this.props;
    return (
      <div>
        <h1>Reset Password</h1>
      </div>
    );
  }
}
// Export the PasswordReset form component
export default PasswordReset;
