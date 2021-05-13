import React, { Component } from 'react';
import Modal from './Modal';
import './OrderInfo.scss';

export default class OrderInfo extends Component {
  state = {
    count: 1,
    unitPrice: 25000,
    isModalOpen: false,
  };

  calculatePrice = () => {
    const { count, unitPrice } = this.state;
    const total = count * unitPrice;
    return new Intl.NumberFormat().format(total);
  };

  handleIncreaseCount = e => {
    e.preventDefault();
    const { count } = this.state;
    if (count < 4) {
      this.setState({
        count: count + 1,
      });
    } else {
      this.setState({
        count: 4,
      });

      this.openModal();
    }
  };

  handleDecreaseCount = e => {
    e.preventDefault();
    const { count } = this.state;
    if (count - 1 < 1) {
      return;
    }
    const newCount = count - 1;
    this.setState({
      count: newCount,
    });
  };

  openModal = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  closeModal = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  render() {
    const { count } = this.state;
    const totalPrice = this.calculatePrice();
    return (
      <>
        <header className="orderInfo">
          <h1 className="productName">로즈 골드</h1>
          <div className="icons">
            <i className="fas fa-share-alt"></i>
            <i className="far fa-heart"></i>
          </div>
        </header>
        <div className="hashTags">#배스밤#놀라운배쓰아트</div>
        <div className="infoWrap">
          <div className="row">
            <span className="col-1">판매가</span>
            <span className="price">₩25,000</span>
          </div>
          <div className="row">
            <span className="col-1">상품무게</span>
            <span>185g</span>
          </div>
          <div className="row">
            <span className="col-1">구매수량</span>
            <form>
              <button onClick={this.handleDecreaseCount}>
                <i className="fas fa-minus"></i>
              </button>
              <input type="text" value={count} />
              <button onClick={this.handleIncreaseCount}>
                <i className="fas fa-plus"></i>
              </button>
            </form>
            <span className="sum">₩{totalPrice}</span>
          </div>
        </div>
        <div className="total">
          <span className="">총 제품 금액</span>
          <span className="totalPrice">₩{totalPrice}</span>
        </div>

        {this.state.isModalOpen ? (
          <Modal onClose={this.closeModal}>
            <h1>잔여 재고 : 4개</h1>
            <p>현재 4개 이상 주문이 어렵습니다.</p>
            <button onClick={this.closeModal}>Close</button>
          </Modal>
        ) : null}
      </>
    );
  }
}
