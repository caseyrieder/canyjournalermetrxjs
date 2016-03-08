import React from 'react';
import AppMenuBar from './AppMenuBar.jsx';
// Render main layout component w/react-bootstrap styles
const Main = ({content = () => null }) => (
  <div>
    <AppMenuBar />
    <div>
      {content()}
    </div>
  </div>
);
// Export bootstrapped component
export default Main;
