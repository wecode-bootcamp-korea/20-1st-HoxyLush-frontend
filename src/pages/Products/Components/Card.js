import React, { Component } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { list } = this.props;
    const tagArr = list.tag.map(item => item.tag);
    const showTagList = tagArr.map(tag => {
      return <span className={tag}>{tag}</span>;
    });
    const showSoldOut = <span className="soldOut">Sold Out</span>;

    return (
      <Link to={`/product/${list.id}`}>
        <li className="card" data-num={list.id}>
          <img
            src={list.imgUrl}
            alt={list.imgAlt}
            className={!list.stock && 'opacity'}
          />
          <div className="tags">{list.stock ? showTagList : showSoldOut}</div>
          <h2 className="title">{list.title}</h2>
          <div className="hashTags small">{list.hashtag}</div>
          <div className="price">{list.price}</div>
        </li>
      </Link>
    );
  }
}

export default Card;
