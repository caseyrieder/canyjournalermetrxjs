import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import Navigation from './Navigation.jsx';
// Render main layout component w/react-bootstrap styles
const Layout = ({content = () => null }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <Grid>
      <Row>
      	<h1>My Inspections(for now)</h1>
      	{content()}
      </Row>
    </Grid>
  </div>
);
// Export bootstrapped component
export default Layout;
