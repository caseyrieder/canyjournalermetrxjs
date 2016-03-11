import React from 'react';
// Render new-employee form & handle error & newEmployee btn
class NewWorker extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='employer' type='hidden' value={this.props.employer} />
          <input ref='name' type='text' placeholder='Worker name...' />
          <input ref='role' type='text' placeholder='role...' />
          <button onClick={this.newWorker.bind(this)} type='submit'>Add</button>
        </form>
      </div>
    );
  }

  newWorker(e) {
    e.preventDefault();
    const {create} = this.props;
    const {employer, name, role} = this.refs;
    create(name.value, role.value, employer.value);
    name.value = '';
    role.value = '';
  }
}
// Export new-worker form component
export default NewWorker;
