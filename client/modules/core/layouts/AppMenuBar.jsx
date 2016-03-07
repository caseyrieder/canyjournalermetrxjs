import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/lib/toolbar';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import LinkMenuItem from 'material-ui/lib/menu/link-menu-item';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FlatButton from 'material-ui/lib/flat-button';
import Divider from 'material-ui/lib/divider'
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import NavigationAppsIcon from 'material-ui/lib/svg-icons/navigation/apps';
import NavigationMoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
// import ToolbarGroup from 'material-ui/lib/toolbar/tootlbar-group';
// import ToolbarGroup from 'material-ui/lib/toolbar/tootlbar-group';
// import ToolbarTitle from 'material-ui/lib/toolbar/tootlbar-title';

injectTapEventPlugin();

const AppMenuBar = () => (
  <Toolbar>
    <ToolbarGroup firstChild={true} float="left">
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            <NavigationAppsIcon />
          </IconButton>
        }
      >
        <MenuItem index={1} primaryText="Inspections" href="/" />
        <MenuItem index={2} primaryText="Buildings" href="/buildings" />
        <MenuItem index={3} primaryText="Contractors" href="/companies" />
        <MenuItem index={4} primaryText="Workers" href="/workers" />
        <Divider />
        <MenuItem index={5} primaryText="Reports" />
      </IconMenu>
    </ToolbarGroup>
    <ToolbarGroup float="right">
      <ToolbarTitle text="CANY" />
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            <NavigationMoreVertIcon />
          </IconButton>
        }
      >
        <MenuItem index={6} primaryText="Settings" />
        <MenuItem index={7} primaryText="Login/Logout" />
      </IconMenu>
    </ToolbarGroup>
  </Toolbar>
);

export default AppMenuBar;
