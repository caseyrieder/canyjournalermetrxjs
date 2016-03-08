import React from 'react';
// Render new-building form & handle error & newBuilding btn
class NewBuilding extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        <h1>Add Building</h1>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref="address" type="text" placeholder="Building address..." />
          <input ref="projectCode" type="textarea" placeholder="projectCode..." />
          <button onClick={this.newBuilding.bind(this)} type="submit">Add Building</button>
        </form>
      </div>
    );
  }

  newBuilding(e) {
    e.preventDefault();
    const {create} = this.props;
    const {address, projectCode} = this.refs;
    create(address.value, projectCode.value);
    address.value = '';
    projectCode.value = '';
  }
}
// Export new-building form component
export default NewBuilding;
