import React from 'react';
import {Grid, Row} from 'react-bootstrap';
// Render main layout component w/react-bootstrap styles
const Layout = ({content = () => null }) => (
  <Grid>
    <Row>
    	<h1>My Journal</h1>
    	{content()}
    </Row>
  </Grid>
);
// Export bootstrapped component
export default Layout;
