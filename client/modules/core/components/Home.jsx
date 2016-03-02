import React from 'react';
// Render Home component
const Home = ({content = () => null }) => (
  <div>
  	<p>Welcome to Mantraplate</p>
  	{content()}
  </div>
);
// Export home component
export default Home;
