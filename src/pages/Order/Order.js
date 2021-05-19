import React, { Component } from 'react';
import CartList from './components/CartList';
import Favorit from './components/Favorit';
import OrderHeader from './components/OrderHeader';
import './Order.scss';

export default class Order extends Component {
  state = {
    productInCart: [],
  };

  componentDidMount() {
    const url = '/data/cart.json';
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productInCart: data.cart_info,
        })
      );
  }

  handleCheckBox = e => {
    const { productInCart } = this.state;
    const arr = productInCart.map(item => {
      if (item.name === e.target.value) {
        return { ...item, is_checked: !item.is_checked };
      } else {
        return item;
      }
    });

    this.setState({ productInCart: arr });
  };

  removeProduct = () => {
    const { productInCart } = this.state;
    this.setState({
      productInCart: productInCart.filter(item => !item.is_checked),
    });
  };

  clearCart = () => {
    const { productInCart } = this.state;
    const option = {
      method: 'PUT',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({
        order_id: 1,
        quantity:
      }),
    };

    fetch(CART_UPDATE_API, option)
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInCart: [],
        });
      });

    productInCart.length &&
      this.setState({
        productInCart: [],
      });
  };

  render() {
    const { productInCart } = this.state;
    return (
      <main className="cart">
        <OrderHeader />
        <CartList
          productInCart={productInCart}
          handleCheckBox={this.handleCheckBox}
          removeProduct={this.removeProduct}
          clearCart={this.clearCart}
        />
        <Favorit />
      </main>
    );
  }
}
