import React, { Component } from 'react';
import Modal from '../../../components/Modal';
import OrderCountControler from '../../../components/OrderCountControler';
import './AddToCart.scss';

export default class AddToCart extends Component {
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

    const total = selectedCount * selectedProduct.option;

    console.log(selectedProduct.option);
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(total);
  };

  render() {
    const { selectedCount } = this.state;
    const {
      selectedProduct,
      closeModalCart,
      closeModalAlert,
      isModalAlertOpen,
      openModalAlert,
    } = this.props;

    return (
      <div className="addToCart">
        <h2>장바구니 담기</h2>
        <i
          id="modalClose"
          className="fas fa-times"
          onClick={closeModalCart}
        ></i>
        <section className="cartModal">
          <img
            alt="러쉬"
            src="https://lush.co.kr/data/goods/11/01/20/79/79_detail_085.jpg"
          />
          <article>
            <div className="productName">{selectedProduct.name}</div>
            <div className="productHashTags">#배쓰밤 #고운바닷소금가득</div>
            <div className="underline"></div>
            <div className="orderNumberForm">
              <OrderCountControler
                selectedProduct={selectedProduct}
                selectedCount={selectedCount}
                openModalAlert={openModalAlert}
                increaseCount={this.increaseCount}
                decreaseCount={this.decreaseCount}
              />
              <span className="sum">{this.calculatePrice()}</span>
            </div>
          </article>
        </section>
        <div className="btns">
          <button
            type="button"
            className="btn leftBtn"
            id="cancel"
            onClick={closeModalCart}
          >
            취소하기
          </button>
          <button type="submit" className="btn rightBtn" id="close">
            담기
          </button>
        </div>

        {isModalAlertOpen ? (
          <Modal onClose={closeModalAlert}>
            <div className="outOfStockModal">
              <i
                id="modalClose"
                className="fas fa-times"
                onClick={closeModalAlert}
              ></i>
              <h1>잔여 재고 : {selectedProduct.option} 개</h1>
              <p>현재 {selectedProduct.stock}개 이상 주문이 어렵습니다.</p>
              <button
                type="button"
                id="outOfStockBtn"
                onClick={closeModalAlert}
              >
                확인하기
              </button>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
