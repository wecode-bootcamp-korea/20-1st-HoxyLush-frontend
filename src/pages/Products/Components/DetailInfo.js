import React, { Component } from 'react';
import Button from '../../../components/Button';
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
        <div className="btnWrapperInDetail">
          <Button name="장바구니" info="cart" />
          <Button name="주문하기" info="order" />
          {/* type:submit */}
        </div>
      </div>
    );
  }
}
