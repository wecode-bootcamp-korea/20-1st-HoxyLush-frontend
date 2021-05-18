import React, { Component } from 'react';
import './DetailImages.scss';

export default class DetailImages extends Component {
  render() {
    const { selectedProduct } = this.props;
    console.log(selectedProduct.product_images);
    return (
      <div className="detailImage">
        <img
          className="productImage"
          src={selectedProduct.product_images}
          alt="러쉬"
        />
        <div className="slider">
          <i className="fas fa-chevron-left"></i>
          <div>
            <img
              className="productImage small"
              src={selectedProduct.product_images}
              alt="러쉬"
            />
            <img
              className="productImage small"
              src={selectedProduct.product_images}
              alt="러쉬"
            />
          </div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
