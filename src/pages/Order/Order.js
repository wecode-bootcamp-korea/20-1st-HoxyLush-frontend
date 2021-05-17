import React, { Component } from 'react';
import CartList from './components/CartList';
// import Favorit from './components/Favorit';
import OrderHeader from './components/OrderHeader';
import './Order.scss';

export default class Order extends Component {
  render() {
    return (
      <main className="cart">
        <OrderHeader />
        <CartList />
        {/* <Favorit /> */}
      </main>
    );
  }
}
