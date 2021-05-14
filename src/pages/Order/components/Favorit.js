import React, { Component } from 'react';

export default class Favorit extends Component {
  render() {
    return (
      <section className="favorit">
        <div className="favoritProduct">찜한 상품</div>
        {/* 찜한 제품이 비어있을 때 로직 */}
        <div className="emptyCart">찜한 상품이 없습니다.</div>
      </section>
    );
  }
}
