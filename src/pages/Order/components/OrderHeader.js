import React, { Component } from 'react';
import './OrderHeader.scss';

export default class OrderHeader extends Component {
  render() {
    return (
      <section className="cartHeader">
        <header className="orderHeader">SHOPPING CART </header>
        <ul className="process">
          <li>Cart</li>
          <i className="fas fa-chevron-right"></i>
          <li>Order</li>
          <i className="fas fa-chevron-right"></i>
          <li>Order confirmed</li>
        </ul>
      </section>
    );
  }
}
