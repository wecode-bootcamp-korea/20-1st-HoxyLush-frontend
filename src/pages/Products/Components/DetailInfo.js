import React, { Component } from 'react';
import Button from '../../../components/Button';
import OrderInfo from './OrderInfo';

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

  render() {
    const { selectedProduct, toggleModalAlert, isModalOpen } = this.props;

    return (
      <div className="detailInfo">
        <OrderInfo
          selectedProduct={selectedProduct}
          toggleModalAlert={toggleModalAlert}
          isModalOpen={isModalOpen}
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
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
