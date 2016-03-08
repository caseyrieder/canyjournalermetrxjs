import React from 'react';
// Render new-worker form & handle error & newWorker btn
class NewWorker extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='name' type='text' placeholder='Worker name...' />
          <input ref='role' type='text' placeholder='role...' />
          <button onClick={this.newWorker.bind(this)} type='submit'>Add Worker</button>
        </form>
      </div>
    );
  }

  newWorker(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, role} = this.refs;
    create(name.value, role.value);
    name.value = '';
    role.value = '';
  }
}
// Export new-worker form component
export default NewWorker;
