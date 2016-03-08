import React from 'react';
import Navigation from './Navigation.jsx';
// Render main layout component
const Main = ({content = () => null }) => (
  <div>
    <Navigation />
    <div>
      {content()}
    </div>
  </div>
);
// Export component
export default Main;
