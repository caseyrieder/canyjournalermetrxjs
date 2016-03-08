import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/lib/toolbar';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import NavigationAppsIcon from 'material-ui/lib/svg-icons/navigation/apps';
import NavigationMoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

injectTapEventPlugin();

const Navigation = () => (
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

export default Navigation;
