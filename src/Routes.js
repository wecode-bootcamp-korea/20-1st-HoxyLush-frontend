import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
<<<<<<< HEAD
import Main from './pages/Main/Main';
=======
import Signup from './pages/Login/Signup';
>>>>>>> master

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Login-signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
