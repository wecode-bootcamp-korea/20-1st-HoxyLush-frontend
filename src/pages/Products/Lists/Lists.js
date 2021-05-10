import React, { Component } from 'react';
import Card from '../Card/Card';
import './Lists.scss';

class Lists extends Component {
  render() {
    const { productLists } = this.props;
    return (
      <ul className="lists">
        {productLists.map(list => {
          return (
            <Card
              key={list.id}
              img={list.imgUrl}
              alt={list.imgAlt}
              title={list.title}
              price={list.price}
              hashtag={list.hashtag}
              tag={list.tag}
              id={list.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default Lists;
