import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { img, alt, title, hashtag, price, tag, id } = this.props;
    return (
      <li className="card" data-num={id}>
        <img src={img} alt={alt} />
        <span>{tag}</span>
        <h2>{title}</h2>
        <div>{hashtag}</div>
        <span>{price}</span>
      </li>
    );
  }
}

export default Card;
