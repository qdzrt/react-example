import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './Root';
import Home from '../components/home/Home';
import About from '../components/about/About';

const ROUTES =(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

ReactDOM.render(ROUTES, document.getElementById('content'));