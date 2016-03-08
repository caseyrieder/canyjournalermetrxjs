import React from 'react';
// Render Home component
const Home = () => (
  <div>
    <h1>Welcome to CANY</h1>
    <div className='home-links'>
      <h3>If you are a new user, please <a href='/register'>register</a> here</h3>
      <h3>If you are an existing user, please <a href='/login'>login</a> here</h3>
    </div>
  </div>
);
// Export home component
export default Home;
