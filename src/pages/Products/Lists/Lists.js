import React, { Component } from 'react';
import Card from '../Card/Card';
import './Lists.scss';

class Lists extends Component {
  render() {
    const { productLists, visibleCards } = this.props;
    return (
      <ul className="lists">
        {productLists.slice(0, visibleCards).map(list => {
          return (
            // <Card
            //   key={list.id}
            //   img={list.imgUrl}
            //   alt={list.imgAlt}
            //   title={list.title}
            //   price={list.price}
            //   hashtag={list.hashtag}
            //   tag={list.tag}
            //   id={list.id}
            // />
            <Card list={list} />
          );
        })}
      </ul>
    );
  }
}

export default Lists;
