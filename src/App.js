import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Homepage from './Homepage';
import Wishlist from './Wishlist';

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={Homepage} />
      <Route path="/wishlist" component={Wishlist} />
    </div>
  );
}

export default App;
