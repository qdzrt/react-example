import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './Root';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Motto from '../components/motto/Motto';
import Users from '../components/users/Users';
import Welcome from '../components/welcome/Welcome';

const ROUTES =(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/motto" component={Motto} />
      <Route path="/users" component={Users} />
    </Route>
  </Router>
);

ReactDOM.render(ROUTES, document.getElementById('content'));