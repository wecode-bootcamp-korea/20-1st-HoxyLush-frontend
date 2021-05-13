import React, { Component } from 'react';
import './Headers.scss';

export default class Headers extends Component {
  render() {
    const { selectedOption } = this.props;
    return (
      <header className="headers">
        <div className="text">
          <h1>{selectedOption}</h1>
          <p>누구나 좋아하는 인기 제품을 만나 보세요!</p>
        </div>
        <img
          className="headerImg"
          src="https://lush.co.kr/data/editor/goods/200617/pc_cate_new02_172432.jpg"
          alt=""
        />
      </header>
    );
  }
}
