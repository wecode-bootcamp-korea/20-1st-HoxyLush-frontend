import React, { Component } from 'react';
import { exchangeCurrency } from '../../../utilityFunc';
import './LikeProduct.scss';

export default class LikeProduct extends Component {
  render() {
    const { like } = this.props;

    return (
      <div className="Likecard">
        <li className="LikecardWrapper">
          <img src={like.image_url} alt="러쉬" />
          <h2 className="title">{like.name}</h2>
          <div className="hashTags small">{like.hashtag}</div>
          <div className="price">{exchangeCurrency(like.price)}</div>
        </li>
        <div className="cardIcons">
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}
