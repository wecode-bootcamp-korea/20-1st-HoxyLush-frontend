import React, { Component } from 'react';
import LikeProduct from './LikeProduct.js';
import './Like.scss';
import { hasObject } from '../../../utilityFunc';

export default class Like extends Component {
  render() {
    const { likeProducts } = this.props;
    console.log(likeProducts);
    return (
      <>
        <section className="favorit">
          <div className="favoritProduct">찜한 상품</div>
          {likeProducts !== undefined ? (
            <ul className="lists">
              {likeProducts.map(like => (
                <LikeProduct like={like} />
              ))}
            </ul>
          ) : (
            <div className="emptyLike">찜한 상품이 없습니다.</div>
          )}
        </section>
      </>
    );
  }
}
