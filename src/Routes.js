import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products';
import Detail from './pages/Products/Detail';
import Category from './pages/Products/Components/Category';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Products/detail" component={Detail} />
          <Route exact path="/Products/category" component={Category} />
          {/* <Route exact path="/Products/:id" component={Detail} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
