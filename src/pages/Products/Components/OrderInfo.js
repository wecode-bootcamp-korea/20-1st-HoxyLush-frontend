import React, { Component } from 'react';
import Modal from '../../../components/Modal';
import OrderCountControler from '../../../components/OrderCountControler';
import { hasObject, exchangeCurrency } from '../../../utilityFunc';
import './OrderInfo.scss';

export default class OrderInfo extends Component {
  calculatePrice = () => {
    const { selectedCount, selectedProduct } = this.props;
    const total = selectedCount * selectedProduct.product_options[0].price;
    return exchangeCurrency(total);
  };

  render() {
    const {
      selectedProduct,
      toggleModalAlert,
      isModalOpen,
      increaseCount,
      decreaseCount,
      selectedCount,
    } = this.props;

    return (
      <>
        {hasObject(selectedProduct) ? (
          <>
            <header className="orderInfo">
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
                  {exchangeCurrency(selectedProduct.product_options[0].price)}
                </span>
              </div>
              <div className="row">
                <span className="col-1">용량</span>
                <span>{selectedProduct.product_options[0].weight}</span>
              </div>
              <div className="row">
                <span className="col-1">구매수량</span>
                <OrderCountControler
                  selectedProduct={selectedProduct}
                  selectedCount={selectedCount}
                  toggleModalAlert={toggleModalAlert}
                  increaseCount={increaseCount}
                  decreaseCount={decreaseCount}
                />
                <span className="sum">{this.calculatePrice()}</span>
              </div>
            </div>
            <div className="total">
              <span className="">총 제품 금액</span>
              <span className="totalPrice">{this.calculatePrice()}</span>
            </div>
          </>
        ) : null}
        {isModalOpen ? (
          <Modal type={MODAL_TYPE}>
            <div className="outOfStockModal">
              <i
                className="fas fa-times modalClose"
                onClick={toggleModalAlert}
              ></i>
              <h1>
                잔여 재고 : {selectedProduct.product_options[0].quantity}개
              </h1>
              <p>
                현재 {selectedProduct.product_options.quantity}개 이상 주문이
                어렵습니다.
              </p>
              <button className="outOfStockBtn" onClick={toggleModalAlert}>
                확인하기
              </button>
            </div>
          </Modal>
        ) : null}{' '}
      </>
    );
  }
}

const MODAL_TYPE = 'AddToCart';
