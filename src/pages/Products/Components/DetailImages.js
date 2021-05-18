import React, { Component } from 'react';
import './DetailImages.scss';

export default class DetailImages extends Component {
  render() {
    const { product_images } = this.props?.selectedProduct;

    return (
      <>
        {product_images && (
          <div className="detailImage">
            <img className="productImage" src={product_images[0]} alt="러쉬" />
            <div className="slider">
              <i className="fas fa-chevron-left"></i>
              <div>
                <img
                  className="productImage small"
                  src={product_images[1]}
                  alt="러쉬"
                />
                <img
                  className="productImage small"
                  src={product_images[2]}
                  alt="러쉬"
                />
              </div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        )}
      </>
    );
  }
}
