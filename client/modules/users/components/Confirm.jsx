import React from 'react';
// Render login component & handle loginUser for onClick btn
class Confirm extends React.Component {
  render() {
    const {error, userId} = this.props;
    return (
      <div>
        <h1>Confirm</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='userId' type='hidden' value={this.props.userId} />
          <input ref='first' type='text' placeholder='First...'/>
          <input ref='last' type='text' placeholder='Last...'/>
          <input ref='role' type='text' placeholder='Role...'/>
          <button onClick={this.addUsr.bind(this)} type='submit'>Confirm</button>
        </form>
      </div>
    );
  }

  addUsr(e) {
    e.preventDefault();
    const {create} = this.props;
    const {userId, first, last, role} = this.refs;
    confirm(userId.value, first.value, last.value, role.value);
    first.value = '';
    last.value = '';
    role.value = '';
  }
}
// Export the existing user Login form component
export default Confirm;
