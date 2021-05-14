import React, { Component } from 'react';
import Modal from '../../../components/Modal';
import './AddToCart.scss';

export default class AddToCart extends Component {
  render() {
    const {
      increase,
      decrease,
      calculate,
      selectedCount,
      onCloseModalCart,
      onCloseModalAlert,
      isModalAlertOpen,
    } = this.props;
    return (
      <div className="addToCart">
        <h2>장바구니 담기</h2>
        <i
          id="modalClose"
          className="fas fa-times"
          onClick={onCloseModalCart}
        ></i>
        <section className="cartModal">
          <img
            alt="러쉬"
            src="https://lush.co.kr/data/goods/11/01/20/79/79_detail_085.jpg"
          />
          <article>
            <div className="productName">더티</div>
            <div className="productHashTags">#배쓰밤 #고운바닷소금가득</div>
            <div className="underline"></div>
            <div className="orderNumberForm">
              <form>
                <button onClick={decrease}>
                  <i className="fas fa-minus"></i>
                </button>
                <input type="text" value={selectedCount} />
                <button onClick={increase}>
                  <i className="fas fa-plus"></i>
                </button>
              </form>
              <span className="sum">{calculate()}</span>
            </div>
          </article>
        </section>
        <div className="btns">
          <button
            className="btn leftBtn"
            id="cancel"
            onClick={onCloseModalCart}
          >
            취소하기
          </button>
          <button className="btn rightBtn" id="close">
            담기
          </button>
        </div>

        {isModalAlertOpen ? (
          <Modal onClose={onCloseModalAlert}>
            <div className="outOfStockModal">
              <i
                id="modalClose"
                className="fas fa-times"
                onClick={onCloseModalAlert}
              ></i>
              <h1>잔여 재고 : 4개</h1>
              <p>현재 4개 이상 주문이 어렵습니다.</p>
              <button id="outOfStockBtn" onClick={onCloseModalAlert}>
                확인하기
              </button>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}
