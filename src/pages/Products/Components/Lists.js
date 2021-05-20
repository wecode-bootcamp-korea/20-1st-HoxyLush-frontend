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
            <Link to={`/products/${1}`}>
              <Card
                key={list.product_id}
                list={list}
                toggleModalAlert={toggleModalAlert}
                toggleModalCart={toggleModalCart}
              />
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default Lists;
