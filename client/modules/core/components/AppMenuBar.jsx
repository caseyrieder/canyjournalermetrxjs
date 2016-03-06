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
        <LinkMenuItem index={1} text="Inspections" payload="/" />
        <MenuItem value={2}>
          <FlatButton
            label="Buildings"
            linkButton={true}
            href="/buildings"
          />
        </MenuItem>
        <FlatButton
          label="Buildings"
          linkButton={true}
          href="/buildings"
        />
        <LinkMenuItem index={3} text="Contractors" payload="/companies" />
        <MenuItem value={4} primaryText="Workers" />
        <Divider />
        <MenuItem value={5} primaryText="Reports" />
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
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Login/Logout" />
      </IconMenu>
    </ToolbarGroup>
  </Toolbar>
);

export default AppMenuBar;
