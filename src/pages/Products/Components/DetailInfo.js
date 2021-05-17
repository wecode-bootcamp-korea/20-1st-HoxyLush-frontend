import React, { Component } from 'react';
import Buttons from './Buttons';
import OrderInfo from './OrderInfo';

export default class DetailInfo extends Component {
  render() {
    const { selectedProduct, openModalAlert, closeModalAlert, isModalOpen } =
      this.props;

    return (
      <div className="detailInfo">
        <OrderInfo
          selectedProduct={selectedProduct}
          openModalAlert={openModalAlert}
          closeModalAlert={closeModalAlert}
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
