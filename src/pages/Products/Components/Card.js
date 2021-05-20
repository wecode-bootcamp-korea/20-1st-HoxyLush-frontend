import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { exchangeCurrency } from '../../../utilityFunc';
import './Card.scss';

class Card extends Component {
  render() {
    const { list, toggleModalCart } = this.props;
    const tagArr = list.tag.map(item => item.tag);
    const showTagList = tagArr.map(tag => {
      return <span className={tag.toLowerCase()}>{tag}</span>;
    });
    const showSoldOut = <span className="soldOut">Sold Out</span>;

    return (
      <div className="card">
        <li
          className="cardWrapper"
          data-num={list.product_id}
          onClick={() => this.props.history.push()}
        >
          {/* <Link to={`/product/${list.product_id}`}> */}
          <img
            src={list.image_url}
            alt="러쉬"
            className={list.option[0].quantity ? '' : 'opacity'}
          />
          <div className="tags">
            {list.option[0].quantity ? showTagList : showSoldOut}
          </div>
          <h2 className="title">{list.name}</h2>
          <div className="hashTags small">{list.hashtag}</div>
          <div className="price">{exchangeCurrency(list.option[0].price)}</div>
          {/* </Link> */}
        </li>
        <div className="cardIcons">
          <i className="far fa-heart"></i>
          <i
            className="fas fa-cart-arrow-down"
            onClick={() => toggleModalCart(list.id)}
          ></i>
        </div>
      </div>
    );
  }
}

export default Card;
