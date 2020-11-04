import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration.jsx';
import SignIn from './components/SignIn.jsx';
import TestPage from './components/test-page.jsx';
import ErrorPage from './components/ErrorPage.jsx';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={Registration} />
        <Route path="/test-page" component={TestPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default Routes;