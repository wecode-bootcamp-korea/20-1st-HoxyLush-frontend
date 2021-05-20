import React, { Component } from 'react';
import CartList from './components/CartList';
import Like from './components/Like';
import OrderHeader from './components/OrderHeader';
import { CART_API, LIKE_API } from '../../config';
import { CART_DELETE_API } from '../../config';
import './Order.scss';

export default class Order extends Component {
  state = {
    productInCart: [],
    likeProducts: [],
  };

  componentDidMount() {
    // const CART_URL = '/data/cart.json';
    // const LIKE_URL = '/data/likeProduct.json';

    const fetchCartOption = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    const fecthLikeOption = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    Promise.all([
      fetch(`${CART_API}/orders/cart`, fetchCartOption),
      fetch(`${LIKE_API}/products/like`, fecthLikeOption),
      // fetch(CART_URL),
      // fetch(LIKE_URL),
    ])
      .then(responses =>
        Promise.all(responses.map(response => response.json()))
      )
      .then(lists =>
        lists.map((list, i) => {
          const stateKeys = ['productInCart', 'likeProducts'];
          const fetchDataKeys = ['selectedQty', 'like_items'];
          return this.setState({
            [stateKeys[i]]: list[fetchDataKeys[i]],
          });
        })
      );
  }

  handleCheckBox = e => {
    const { productInCart } = this.state;
    const nextProductInCart = productInCart.map(item => {
      if (item.name === e.target.value) {
        return { ...item, is_checked: !item.is_checked };
      } else {
        return item;
      }
    });

    this.setState({ productInCart: nextProductInCart });
  };

  handleAllCheckedBox = () => {
    const { productInCart } = this.state;
    const updatedProductStatusInCart = productInCart.map(item => {
      return { ...item, is_checked: !item.is_checked };
    });
    this.setState({ productInCart: updatedProductStatusInCart });
  };

  getDataFromServer = () => {
    const fetchCartOption = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    fetch(`${CART_API}/orders/cart`, fetchCartOption)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productInCart: data.selectedQty,
        })
      );
  };

  sendToDeleteInfo = id => {
    const { productInCart } = this.state;
    const fetchDeleteOption = {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    fetch(`${CART_DELETE_API}/orders/cart?${id}`, fetchDeleteOption).then(res =>
      this.setState({
        productInCart: productInCart.filter(item => item.is_checked === true),
      })
    );
  };

  removeProduct = () => {
    const { productInCart } = this.state;
    const optionId = productInCart
      .filter(item => item.is_checked === true)
      .map(item => {
        return item.option_id;
      });

    const queryString = optionId.map(item => `option-id=${item}`).join('&');

    this.sendToDeleteInfo(queryString);
    this.getDataFromServer();
  };

  clearCart = () => {
    const { productInCart } = this.state;
    const optionId = productInCart
      .filter(item => item.is_checked === true)
      .map(item => {
        return item.option_id;
      });

    const queryString = optionId.map(item => `option-id=${item}`).join('&');
    this.sendToDeleteInfo(queryString);
  };

  render() {
    const { productInCart, likeProducts } = this.state;
    return (
      <main className="cart">
        <OrderHeader />
        {/* {productInCart.length && ( */}
        <CartList
          productInCart={productInCart}
          handleCheckBox={this.handleCheckBox}
          removeProduct={this.removeProduct}
          clearCart={this.clearCart}
          handleAllCheckedBox={this.handleAllCheckedBox}
        />
        {/* )} */}
        {/* <Like likeProducts={likeProducts} /> */}
      </main>
    );
  }
}
