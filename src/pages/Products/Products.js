import React, { Component } from 'react';
import Headers from './Headers/Headers';
import Lists from './Lists/Lists';
import './Products.scss';

class Products extends Component {
  state = {
    selectedOption: '베스트',
    productLists: [],
  };

  componentDidMount() {
    const url = '/data/productList.json';
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: data,
        })
      );
  }

  render() {
    const { productLists, selectedOption } = this.state;
    return (
      <section className="products">
        <Headers selectedOption={selectedOption} />
        <div className="selectedOption"> {selectedOption}</div>
        <Lists productLists={productLists} />
      </section>
    );
  }
}

export default Products;
