import React, { Component } from 'react';
import Modal from '../../../components/Modal';
import './OrderInfo.scss';

export default class OrderInfo extends Component {
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
              <button type="button" onClick={decrease}>
                <i className="fas fa-minus"></i>
              </button>
              <input type="text" value={selectedCount} />
              <button type="button" onClick={increase}>
                <i className="fas fa-plus"></i>
              </button>
            </form>
            <span className="sum">{calculate}</span>
          </div>
        </div>
        <div className="total">
          <span className="">총 제품 금액</span>
          <span className="totalPrice">{calculate}</span>
        </div>

        {isModalOpen ? (
          <Modal>
            <div className="outOfStockModal">
              <i
                id="modalClose"
                className="fas fa-times"
                onClick={closeModalAlert}
              ></i>
              <h1>잔여 재고 : 4개</h1>
              <p>현재 4개 이상 주문이 어렵습니다.</p>
              <button id="outOfStockBtn" onClick={closeModalAlert}>
                확인하기
              </button>
            </div>
          </Modal>
        ) : null}
      </>
    );
  }
}
