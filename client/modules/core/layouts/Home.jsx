import React from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
// Render Home component
const Home = () => (
  <div>
    <h1 className='txt-ctr'>Welcome to CANY</h1>
    <h3>To login, click <a href='/login'>here</a></h3>
    <h3>To sign up, click <a href='/register'>here</a></h3>
    <AccountsUIWrapper />
  </div>
);
// Export home component
export default Home;
