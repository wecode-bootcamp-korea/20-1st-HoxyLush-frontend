import React, { Component } from 'react';
import Modal from '../../../components/Modal';
import OrderCountControler from '../../../components/OrderCountControler';
import './OrderInfo.scss';

export default class OrderInfo extends Component {
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

  calculatePrice = () => {
    const { selectedCount } = this.state;
    const { selectedProduct } = this.props;

    const total = selectedCount * selectedProduct.option[0].price;
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(total);
  };

  render() {
    const { selectedCount } = this.state;
    const { selectedProduct, toggleModalAlert, isModalOpen } = this.props;

    return (
      <>
        {/* <header className="orderInfo">
          <h1 className="productName">{selectedProduct.name}</h1>
          <div className="icons">
            <i className="fas fa-share-alt"></i>
            <i className="far fa-heart"></i>
          </div>
        </header>
        <div className="hashTags">{selectedProduct.hashtag}</div>
        <div className="infoWrap">
          <div className="row">
            <span className="col-1">판매가</span>
            <span className="price">
              {new Intl.NumberFormat('ko-KR', {
                style: 'currency',
                currency: 'KRW',
              }).format(selectedProduct.option[0].price)}
            </span>
          </div>
          <div className="row">
            <span className="col-1">용량</span>
            <span>{selectedProduct.weight}</span>
          </div>
          <div className="row">
            <span className="col-1">구매수량</span>
            <OrderCountControler
              selectedProduct={selectedProduct}
              selectedCount={selectedCount}
              toggleModalAlert={toggleModalAlert}
              increaseCount={this.increaseCount}
              decreaseCount={this.decreaseCount}
            />
            <span className="sum">{this.calculatePrice()}</span>
          </div>
        </div>
        <div className="total">
          <span className="">총 제품 금액</span>
          <span className="totalPrice">{this.calculatePrice()}</span>
        </div>

        {isModalOpen ? (
          <Modal>
            <div className="outOfStockModal">
              <i
                className="fas fa-times modalClose"
                onClick={toggleModalAlert}
              ></i>
              <h1>잔여 재고 : {selectedProduct.quantity}개</h1>
              <p>현재 {selectedProduct.quantity}개 이상 주문이 어렵습니다.</p>
              <button className="outOfStockBtn" onClick={toggleModalAlert}>
                확인하기
              </button>
            </div>
          </Modal>
        ) : null} */}
      </>
    );
  }
}
