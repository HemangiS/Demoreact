import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory} from 'react-router';

import App from './App';
import Welcome from './welcome';
import Register from './register';
import Login from './login';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Route>
  </Router>

), document.getElementById('root'));
