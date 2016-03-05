import React from 'react';
const { AppBar, IconMenu, IconButton } = mui;
const { MenuItem, MenuDivider } = mui.Menus;
const { NavigationExpandMore, NavigationMoreVert} = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;
// import AppBar from 'material-ui/lib/app-bar';
// import IconMenu from 'material-ui/lib/menu/menus/icon-menu';
// import ExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
// import LinkMenuItem from 'material-ui/lib/menu/link-menu-item';
// import MenuDivider from 'material-ui/lib/menu/menus/menu-divider';
// import IconButton from 'material-ui/lib/icon-button';
// import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
// Create navbar component
const NavigationBar = () => (
  <AppBar
    title="CANY"
    iconElementLeft={
      <IconMenu
        iconButtonElement={
          <IconButton><NavigationExpandMore /></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem linkButton={true} href="/" primaryText="Inspections" />
        <MenuItem linkButton={true} href="/sites" primaryText="Sites" />
        <MenuItem linkButton={true} href="/companies" primaryText="Companies" />
        <MenuItem linkButton={true} href="/workers" primaryText="Workers" />
        <MenuItem linkButton={true} href="/reports" primaryText="Reports" />
      </IconMenu>
    }
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><NavigationMoreVert /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem linkButton={true} primaryText="Settings" href="#" />
        <MenuItem linkButton={true} primaryText="Login/out" href="#" />
      </IconMenu>
    }
  />
);
// Export Navbar component
export default NavigationBar;
