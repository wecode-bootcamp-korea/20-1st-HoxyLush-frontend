import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    const { img, alt, title, hashtag, price, tag, id } = this.props;
    console.log(tag);
    return (
      <li className="card" data-num={id}>
        <img src={img} alt={alt} />
        <div className="tag">
          {tag.map(item => {
            return <span className={item.class}>{item.name}</span>;
          })}
        </div>
        <h2 className="title">{title}</h2>
        <div className="hashtag">{hashtag}</div>
        <div className="price">{price}</div>
      </li>
    );
  }
}

export default Card;
