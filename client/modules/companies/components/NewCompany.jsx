import React from 'react';
// Render new-company form & handle error & newCompany btn
class NewCompany extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <h1>Add Company</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref="name" type="text" placeholder="Company name..." />
          <input ref="specialty" type="textarea" placeholder="specialty..." />
          <button onClick={this.newCompany.bind(this)} type="submit">Add</button>
        </form>
      </div>
    )
  }

  newCompany(e) {
    e.preventDefault();
    const {create} = this.props;
    const {name, specialty} = this.refs;
    create(name.getValue(), specialty.getValue());
    name.getInputDOMNode().value = '';
    specialty.getInputDOMNode().value = '';
  }
}
// Export new-company form component
export default NewCompany;
