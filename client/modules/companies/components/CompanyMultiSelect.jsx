import React from 'react';
import MobileTearSheet from '../../../MobileTearSheet';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);

function wrapState(ComposedComponent) {
  const StateWrapper = React.createClass({
    getInitialState() {
      return {selectedIndex: 1};
    },
    handleUpdateSelectedIndex(event, index) {
      this.setState({
        selectedIndex: index,
      });
    },
    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          valueLink={{value: this.state.selectedIndex, requestChange: this.handleUpdateSelectedIndex}}
        />
      );
    },
  });
  return StateWrapper;
}

SelectableList = wrapState(SelectableList);

const CompanyMultiSelect = ({companies}) => (
  <MobileTearSheet>
    <SelectableList>
      {companies.map(company => (
        <ListItem
          value={company._id}
          leftCheckbox={<Checkbox />}
          primaryText={company.name}
          onCheck={this.toggleCompany.bind(this)}
        />
      ))}
    </SelectableList>
  </MobileTearSheet>
);

// Export company multiselect component
export default CompanyMultiSelect;
