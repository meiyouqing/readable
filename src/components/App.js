import { Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Category from './Category';
import Post from './Post';
import Edit from './Edit';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/category/:id" component={Category} />
      <Route path="/post/:id" component={Post} />
      <Route path="/edit/:id" component={Edit} />
    </div>
  </Router>
);
