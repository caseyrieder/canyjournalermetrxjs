import React from 'react';
import {Grid, Row} from 'react-bootstrap';
import AppMenuBar from './AppMenuBar.jsx';
// Render main layout component w/react-bootstrap styles
const Layout = ({content = () => null }) => (
  <div>
    <AppMenuBar />
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
