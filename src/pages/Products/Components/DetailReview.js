import React, { Component } from 'react';
import './DetailReview.scss';

export default class DetailReview extends Component {
  render() {
    return (
      <div className="DetailReview">
        <div className="detailNavi">
          <div className="menu">상품상세정보</div>
          <div className="menu default">상품후기</div>
          <div className="menu">배송/교환 및 반품안내</div>
        </div>
      </div>
    );
  }
}
