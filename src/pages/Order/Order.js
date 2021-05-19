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
    const LIKE_URL = '/data/likeProduct.json';

    const fetchCartOption = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    // const fecthLikeOption = {
    //   method: 'GET',
    //   headers: {
    //     Authorization: localStorage.getItem('Authorization'),
    //   },
    // };

    Promise.all([
      fetch(`${CART_API}/orders/cart`, fetchCartOption),
      // fetch(`${LIKE_API}/products/like`, fecthLikeOption),
      // fetch(CART_URL),
      fetch(LIKE_URL),
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

  removeProduct = e => {
    const { productInCart } = this.state;
<<<<<<< HEAD
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
=======

    //장바구니에 남은 제품의 option_id 뽑아오기
    const fetchDeleteOption = {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    fetch(`${CART_DELETE_API}/orders/cart?option-id=5`, fetchDeleteOption).then(
      res =>
        this.setState({
          productInCart: productInCart.filter(item => item.is_checked === true),
        })
    );

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

  clearCart = () => {
    // const { productInCart } = this.state;
    //장바구니에 담긴 제품의 option_id 뽑아오기
    const fetchDeleteOption = {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    };

    fetch(
      `${CART_DELETE_API}/orders/cart?option-id=1&option-id=5`,
      fetchDeleteOption
    )
>>>>>>> master
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInCart: [],
        });
<<<<<<< HEAD
      });

    productInCart.length &&
      this.setState({
        productInCart: [],
=======
>>>>>>> master
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
          handleAllCheckedBox={this.handleAllCheckedBox}
        />
        {/* <Like likeProducts={likeProducts} /> */}
      </main>
    );
  }
}
