import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import './Lists.scss';

class Lists extends Component {
  render() {
    const { productLists, toggleModalAlert, toggleModalCart } = this.props;
    return (
      <ul className="lists">
        {productLists.map(list => {
          return (
            <Card
              key={list.product_id}
              id={list.product_id}
              list={list}
              toggleModalAlert={toggleModalAlert}
              toggleModalCart={toggleModalCart}
            />
          );
        })}
      </ul>
    );
  }
}

export default Lists;
