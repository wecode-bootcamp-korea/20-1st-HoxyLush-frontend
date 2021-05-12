import React, { Component } from 'react';
import Card from './Card';
import './Lists.scss';

class Lists extends Component {
  render() {
    const { productLists, visibleCards } = this.props;
    return (
      <ul className="lists">
        {productLists.slice(0, visibleCards).map(list => {
          return <Card key={list.id} list={list} />;
        })}
      </ul>
    );
  }
}

export default Lists;
