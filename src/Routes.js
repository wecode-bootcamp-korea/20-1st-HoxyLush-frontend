import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products';
import Detail from './pages/Products/Components/Detail';
import Order from './pages/Order/Order';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/detail" component={Detail} />
          <Route exact path="/products/:id" component={Detail} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
