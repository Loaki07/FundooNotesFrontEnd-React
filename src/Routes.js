import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/pages/Registration.jsx';
import SignIn from './components/pages/SignIn.jsx';
import TestPage from './components/pages/test-page.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import ForgotPassword from './components/pages/ForgotPassword.jsx';
import ResetPassword from './components/pages/ResetPassword.jsx';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/register" component={Registration} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/test-page" component={TestPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
