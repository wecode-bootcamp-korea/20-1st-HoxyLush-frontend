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
      closeModal,
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
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
        <Buttons />
      </div>
    );
  }
}
