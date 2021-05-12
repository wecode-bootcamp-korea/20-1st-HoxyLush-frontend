import React, { Component } from 'react';
import './Buttons.scss';

export default class Buttons extends Component {
  render() {
    return (
      <div className="btns">
        <input className="btn cart" type="button" value="장바구니" />
        <input className="btn order" type="button" value="주문하기" />
      </div>
    );
  }
}
