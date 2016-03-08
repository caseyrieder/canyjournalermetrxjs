import React from 'react';
// Render new-inspection form & handle error & newInspection btn
class NewInspection extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <h1>Add Inspection</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='title' type='text' placeholder='Inspection title...' />
          <input ref='content' type='textarea' placeholder='Your inspection...' />
          <button onClick={this.newInspection.bind(this)} type='submit'>Add Inspection</button>
        </form>
      </div>
    );
  }

  newInspection(e) {
    e.preventDefault();
    const {create} = this.props;
    const {title, content} = this.refs;
    create(title.value, content.value);
    title.value = '';
    content.value = '';
  }
}
// Export new-inspection form component
export default NewInspection;
