import React, { Component } from 'react';
import Buttons from './Buttons';
import OrderInfo from './OrderInfo';

export default class DetailInfo extends Component {
  render() {
    const { selectedProduct, toggleModalAlert, isModalOpen } = this.props;

    return (
      <div className="detailInfo">
        <OrderInfo
          selectedProduct={selectedProduct}
          toggleModalAlert={toggleModalAlert}
          isModalOpen={isModalOpen}
        />
        <Buttons
          leftBtn="장바구니"
          rightBtn="주문하기"
          leftLabel="cart"
          rightLabel="order"
          btnTypeButton="button"
          btnTypeSubmit="submit"
        />
      </div>
    );
  }
}
