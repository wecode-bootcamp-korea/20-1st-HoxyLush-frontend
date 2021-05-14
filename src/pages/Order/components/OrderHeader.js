import React, { Component } from 'react';

export default class OrderHeader extends Component {
  render() {
    return (
      <section className="cartHeader">
        <header>SHOPPING CART </header>
        <div className="process">
          <span>Cart</span>
          <span>Order</span>
          <span>Order confirmed</span>
        </div>
      </section>
    );
  }
}
