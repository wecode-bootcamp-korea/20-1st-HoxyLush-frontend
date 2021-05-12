import React, { Component } from 'react';
import './DetailImages.scss';

export default class DetailImages extends Component {
  render() {
    return (
      <div className="detailImage">
        <img
          className="productImage"
          src="https://lush.co.kr/data/goods/11/01/20/79/79_detail_085.jpg"
          alt="러쉬"
        />
        <div className="slider">
          <i class="fas fa-chevron-left"></i>
          <div>
            <img
              className="productImage small"
              src="https://lush.co.kr/data/goods/11/01/20/79/79_detail_085.jpg"
              alt="러쉬"
            />
            <img
              className="productImage small"
              src="https://lush.co.kr/data/goods/11/01/20/37/t50_37_detail_161.jpg"
              alt="러쉬"
            />
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
