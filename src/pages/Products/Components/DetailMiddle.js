import React, { Component } from 'react';
import './DetailMiddle.scss';

export default class DetailMiddle extends Component {
  render() {
    const { moveToReviewSection, detailRef } = this.props;

    return (
      <div className="detailMiddle">
        <div className="detailNavi">
          <div className="menu default" ref={detailRef}>
            상품상세정보
          </div>
          <div className="menu" onClick={moveToReviewSection}>
            상품후기
          </div>
          <div className="menu">배송/교환 및 반품안내</div>
        </div>
        <iframe
          className="youtube"
          width="1100"
          height="551"
          src="https://www.youtube.com/embed/q7dqUHYraJ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="productName">
          <span className="productType">페이스 앤 보디 마스크</span>
          <span className="productNameKR">로즈 골드</span>
          <span className="productNameENG">Rose Gold</span>
        </div>
        <div className="bestReview">
          <img
            src="http://img.lush.co.kr/product/body/beautysleep_review.jpg"
            alt="러쉬"
          />
          <div className="bestReivewText">
            <div className="reviewTitle">
              미리 써 본 후기
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus iure dignissimos laboriosam in? Est omnis architecto
              fuga laborum eius sapiente at ullam, quia necessitatibus earum
              pariatur perferendis accusantium aperiam eligendi eaque a maiores.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
