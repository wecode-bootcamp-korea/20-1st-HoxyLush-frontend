import React, { Component } from 'react';
import CartList from './components/CartList';
import Like from './components/Like';
import OrderHeader from './components/OrderHeader';
import './Order.scss';

export default class Order extends Component {
  state = {
    productInCart: [],
    likeProducts: [],
  };

  componentDidMount() {
    const CART_URL = '/data/cart.json';
    const LIKE_URL = '/data/likeProduct.json';
    Promise.all([fetch(CART_URL), fetch(LIKE_URL)])
      .then(responses =>
        Promise.all(responses.map(response => response.json()))
      )
      .then(lists =>
        lists.map((list, i) => {
          const stateKeys = ['productInCart', 'likeProducts'];
          const fetchDataKeys = ['cart_info', 'like_info'];
          return this.setState({
            [stateKeys[i]]: list[fetchDataKeys[i]],
          });
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
    // const option = {
    //   method: 'POST',
    //   headers: {
    //     Authorization: localStorage.getItem('access_token'),
    //   },
    //   body: JSON.stringify({
    //     order_id: order_id,
    //   }),
    // };

    // fetch(CART_UPDATE_API, option)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       productInCart: [],
    //     });
    //   });

    productInCart.length &&
      this.setState({
        productInCart: [],
      });
  };

  render() {
    const { productInCart, likeProducts } = this.state;
    return (
      <main className="cart">
        <OrderHeader />
        <CartList
          productInCart={productInCart}
          handleCheckBox={this.handleCheckBox}
          removeProduct={this.removeProduct}
          clearCart={this.clearCart}
        />
        <Like likeProducts={likeProducts} />
      </main>
    );
  }
}
