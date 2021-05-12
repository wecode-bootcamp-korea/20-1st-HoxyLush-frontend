import React, { Component } from 'react';
import './Buttons.scss';

export default class Buttons extends Component {
  render() {
    return (
      <div className="btns">
        <button className="btn cart">장바구니</button>
        <button className="btn order">주문하기</button>
      </div>
    );
  }
}
