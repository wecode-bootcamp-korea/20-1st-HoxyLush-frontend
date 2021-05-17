import React, { Component } from 'react';
import BasicButton from '../../../components/BasicButton';
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
          <BasicButton buttonName="장바구니" buttonInfo="cart" />
          <BasicButton buttonName="주문하기" buttonInfo="order" />
          {/* type:submit */}
        </div>
      </div>
    );
  }
}
