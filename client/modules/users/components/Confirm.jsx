import React from 'react';
// Render login component & handle loginUser for onClick btn
class Confirm extends React.Component {
  render() {
    const {error, userId} = this.props;
    return (
      <div>
        <h1>Confirm</h1>
      </div>
    );
  }
}
// Export the existing user Login form component
export default Confirm;
