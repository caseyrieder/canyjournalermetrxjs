import React from 'react';
// Render new-company form & handle error & newCompany btn
class NewCompany extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='name' type='text' placeholder='Company name...' />
          <input ref='specialty' type='text' placeholder='specialty...' />
          <button onClick={this.newCompany.bind(this)} type='submit'>Add</button>
        </form>
      </div>
    );
  }

  newCompany(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, specialty} = this.refs;
    create(name.value, specialty.value);
    name.value = '';
    specialty.value = '';
  }
}
// Export new-company form component
export default NewCompany;
