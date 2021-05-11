import React, { Component } from 'react';
import './Card.scss';
// import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    // const { img, alt, title, hashtag, price, tag, id } = this.props;

    const { list } = this.props;
    return (
      <li className="card" data-num={list.id}>
        <img src={list.imgUrl} alt={list.imgAlt} />
        <div className="tag">
          {list.tag.map(item => {
            return <span className={item}>{item}</span>;
          })}
        </div>
        <h2 className="title">{list.title}</h2>
        <div className="hashtag">{list.hashtag}</div>
        <div className="price">{list.price}</div>
      </li>
    );
  }
}

export default Card;
