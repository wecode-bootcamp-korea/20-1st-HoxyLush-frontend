import React, { Component } from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { list, openModalCart } = this.props;
    const tagArr = list.tag.map(item => item.tag);
    const showTagList = tagArr.map(tag => {
      return <span className={tag}>{tag}</span>;
    });
    const showSoldOut = <span className="soldOut">Sold Out</span>;

    return (
      <div className="card">
        <li className="cardWrapper" data-num={list.id}>
          <Link to={`/product/${list.id}`}>
            <img
              src={list.imgUrl}
              alt={list.imgAlt}
              className={!list.stock && 'opacity'}
            />
            <div className="tags">{list.stock ? showTagList : showSoldOut}</div>
            <h2 className="title">{list.title}</h2>
            <div className="hashTags small">{list.hashtag}</div>
            <div className="price">{list.price}</div>
          </Link>
        </li>
        <div className="cardIcons">
          <i className="far fa-heart"></i>
          <i className="fas fa-cart-arrow-down" onClick={openModalCart}></i>
        </div>
      </div>
    );
  }
}

export default Card;
