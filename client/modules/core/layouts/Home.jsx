import React from 'react';
// Render Home component
// const Home = ({content = () => null }) => (
const Home = () => (
  <div>
    <p>Welcome to CANY</p>
    <div>
      <p>If you are a new user, please <a href='/register'>register</a> here</p>
    </div>
    <div>
      <p>If you are an existing user, please <a href='/login'>login</a> here</p>
    </div>
  </div>
);
// Export home component
export default Home;
