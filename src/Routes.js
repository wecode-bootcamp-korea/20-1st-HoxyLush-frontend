import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Loginsignup from './pages/Login/Loginsignup';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Login-signup" component={Loginsignup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
