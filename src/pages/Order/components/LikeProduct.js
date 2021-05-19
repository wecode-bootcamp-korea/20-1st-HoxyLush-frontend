import React, { Component } from 'react';
import './LikeProduct.scss';

export default class LikeProduct extends Component {
  render() {
    const { like } = this.props;
    const tagArr = like.tag.map(item => item.tag);
    const showTagList = tagArr.map(tag => {
      return <span className={tag.toLowerCase()}>{tag}</span>;
    });
    const showSoldOut = <span className="soldOut">Sold Out</span>;

    return (
      <div className="Likecard">
        <li className="LikecardWrapper">
          <img
            src={like.image_url}
            alt="러쉬"
            className={like.option[0].stock ? '' : 'opacity'}
          />
          <div className="tags">
            {like.option[0].stock ? showTagList : showSoldOut}
          </div>
          <h2 className="title">{like.name}</h2>
          <div className="hashTags small">{like.hashtag}</div>
          <div className="price">
            {new Intl.NumberFormat('ko-KR', {
              style: 'currency',
              currency: 'KRW',
            }).format(like.option[0].price)}
          </div>
        </li>
        <div className="cardIcons">
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}
