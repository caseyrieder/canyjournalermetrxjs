import React from 'react';
// Render new-employee form & handle error & newEmployee btn
class NewEmployee extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <form>
          <input ref='companyId' type='hidden' value={this.props.companyId} />
          <input ref='name' type='text' placeholder='Worker name...' />
          <input ref='role' type='text' placeholder='role...' />
          <button onClick={this.addEmployee.bind(this)} type="submit">Add Employee</button>
        </form>
      </div>
    );
  }

  addEmployee(e) {
    e.preventDefault();
    const {create} = this.props;
    const {companyId, name, role} = this.refs;
    create(companyId.value, name.value, role.value);
    name.value = '';
    role.value = '';
  }
}
// Export new-worker form component
export default NewEmployee;
