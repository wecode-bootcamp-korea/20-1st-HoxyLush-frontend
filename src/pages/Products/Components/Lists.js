import React, { Component } from 'react';
import Card from './Card';
import './Lists.scss';

class Lists extends Component {
  render() {
    const { productLists, openModalAlert, openModalCart, visibleCards } =
      this.props;

    return (
      <ul className="lists">
        {productLists.slice(0, visibleCards).map(list => {
          return (
            <Card
              key={list.product_id}
              list={list}
              openModalAlert={openModalAlert}
              openModalCart={openModalCart}
            />
          );
        })}
      </ul>
    );
  }
}

export default Lists;
