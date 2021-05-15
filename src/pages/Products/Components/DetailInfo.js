import React, { Component } from 'react';
import Buttons from './Buttons';
import Category from './Category';
import OrderInfo from './OrderInfo';

export default class DetailInfo extends Component {
  render() {
    const {
      increase,
      decrease,
      calculate,
      selectedCount,
      closeModalAlert,
      isModalOpen,
    } = this.props;

    return (
      <div className="detailInfo">
        <Category />
        <OrderInfo
          increase={increase}
          decrease={decrease}
          calculate={calculate}
          selectedCount={selectedCount}
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
