import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// Create navbar component
const Navigation = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        CANY Inspector
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        {/*<NavDropdown eventKey={1} id="nav-dropdown" noCaret title="Navigation Dropdown">*/}
        <NavItem eventKey={1} href="/">Entries</NavItem>
        <NavItem eventKey={2} href="/sites">Sites</NavItem>
        <NavItem eventKey={3} href="/companies">Companies</NavItem>
        <NavItem eventKey={4} href="/workers">Workers</NavItem>
        <NavItem eventKey={5} href="/reports">Reports</NavItem>
        <NavItem eventKey={6} href="#">Login/out</NavItem>
        {/*</NavDropdown>*/}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
// Export Navbar component
export default Navigation;

// see https://react-bootstrap.github.io/components.html#navs-dropdown
