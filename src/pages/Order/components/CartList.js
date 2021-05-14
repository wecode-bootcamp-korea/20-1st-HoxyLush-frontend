import React, { Component } from 'react';
import './CartList.scss';

export default class CartList extends Component {
  render() {
    return (
      <section className="cartList">
        <div className="selectedOption">제품</div>
        {/* 장바구니가 비어있을 때 로직 */}
        <div className="emptyCart">장바구니에 담겨있는 상품이 없습니다.</div>
        <div className="orderPrice">
          <span>총 0 개의 금액</span>
          <span>0</span>
          <span>+</span>
          <span>배송비</span>
          <span>0</span>
          <span>=</span>
          <span>총 주문금액</span>
          <span className="finalPrice">0</span>
        </div>
      </section>
    );
  }
}
