import React, { Component } from 'react';
import Button from '../../../components/Button';
import OrderInfo from './OrderInfo';
import { CART_UPDATE_API } from '../../../config';

export default class DetailInfo extends Component {
  state = {
    selectedCount: 1,
  };

  increaseCount = () => {
    const { selectedCount } = this.state;
    this.setState({
      selectedCount: selectedCount + 1,
    });
  };

  decreaseCount = () => {
    const { selectedCount } = this.state;
    this.setState({
      selectedCount: selectedCount - 1,
    });
  };

  saveOnCart = () => {
    const { selectedCount } = this.state;
    const fetchUpdateOption = {
      method: 'PATCH',
      Authorization: localStorage.getItem('Authorization'),
      body: JSON.stringify({
        option_id: 1,
        quantity: selectedCount,
      }),
    };
    fetch(`${CART_UPDATE_API}/orders/cart`, fetchUpdateOption);
    this.setState({
      selectedCount: 1,
    });
  };

  render() {
    const { selectedCount } = this.state;
    const { selectedProduct, toggleModalAlert, isModalOpen } = this.props;

    return (
      <div className="detailInfo">
        <OrderInfo
          selectedProduct={selectedProduct}
          selectedCount={selectedCount}
          toggleModalAlert={toggleModalAlert}
          isModalOpen={isModalOpen}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
        />
        <div className="btnWrapperInDetail">
          <Button name="장바구니" info="cart" event={this.saveOnCart} />
          <Button name="주문하기" info="order" />
        </div>
      </div>
    );
  }
}
