import React, { Component } from 'react';
import { hasObject } from '../../../utilityFunc';
import './DetailImages.scss';

export default class DetailImages extends Component {
  render() {
    const { selectedProduct } = this.props;
    const [mainImg, secondImg, thirdImg] = selectedProduct.product_images || [];
    return (
      <>
        {hasObject(selectedProduct) && (
          <div className="detailImage">
            <img className="productImage" src={mainImg} alt="러쉬" />
            <div className="slider">
              <i className="fas fa-chevron-left"></i>
              <div>
                {secondImg ? (
                  <img
                    className="productImage small"
                    src={secondImg}
                    alt="러쉬"
                  />
                ) : (
                  <img
                    className="productImage small"
                    src={mainImg}
                    alt="러쉬"
                  />
                )}
                {thirdImg && (
                  <img
                    className="productImage small"
                    src={thirdImg}
                    alt="러쉬"
                  />
                )}
              </div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        )}
      </>
    );
  }
}
