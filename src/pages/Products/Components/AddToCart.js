import React, { Component } from 'react';
import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import OrderCountControler from '../../../components/OrderCountControler';
import { exchangeCurrency } from '../../../utilityFunc';
import './AddToCart.scss';

export default class AddToCart extends Component {
  state = {
    selectedCount: 1,
  };

  increaseCount = () => {
    const { selectedCount } = this.state;
    const { selectedProduct, toggleModalAlert } = this.props;

    const isOutOfStock = selectedProduct.option[0].quantity;
    const isLimitedStock = selectedCount === selectedProduct.option[0].quantity;
    if (isOutOfStock || isLimitedStock) return toggleModalAlert();

    this.setState({
      selectedCount: selectedCount + 1,
    });
  };

  decreaseCount = () => {
    const { selectedCount } = this.state;
    if (selectedCount < 1) return;
    this.setState({
      selectedCount: selectedCount - 1,
    });
  };

  calculatePrice = () => {
    const { selectedCount } = this.state;
    const { selectedProduct } = this.props;
    const total = selectedCount * selectedProduct.option[0].price;
    return exchangeCurrency(total);
  };

  render() {
    const { selectedCount } = this.state;
    const {
      selectedProduct,
      toggleModalCart,
      toggleModalAlert,
      isModalAlertOpen,
    } = this.props;

    return (
      <div className="addToCart">
        <h2>장바구니 담기</h2>
        <i className="fas fa-times modalClose" onClick={toggleModalCart}></i>
        <section className="cartModal">
          <img alt="러쉬" src={selectedProduct.image_url} />
          <article>
            <div className="productName">{selectedProduct.name}</div>
            <div className="productHashTags">{selectedProduct.hashtag}</div>
            <div className="underline"></div>
            <div className="orderNumberForm">
              <OrderCountControler
                selectedProduct={selectedProduct}
                selectedCount={selectedCount}
                toggleModalAlert={toggleModalAlert}
                increaseCount={this.increaseCount}
                decreaseCount={this.decreaseCount}
              />
              <span className="sum">{this.calculatePrice()}</span>
            </div>
          </article>
        </section>
        <div className="btns">
          <Button name="취소하기" info="cancel" event={toggleModalCart} />
          <Button name="담기" info="putInCart" />
        </div>

        {isModalAlertOpen && (
          <Modal onClose={toggleModalAlert}>
            <div className="outOfStockModal">
              <i
                className="fas fa-times modalClose"
                onClick={toggleModalAlert}
              ></i>
              <h1>잔여 재고 : {selectedProduct.option[0].quantity} 개</h1>
              <p>
                현재 {selectedProduct.option[0].quantity}개 이상 주문이
                어렵습니다.
              </p>
              <button
                type="button"
                className="outOfStockBtn"
                onClick={toggleModalAlert}
              >
                확인하기
              </button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
