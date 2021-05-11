import React, { Component } from 'react';
import Headers from './Headers/Headers';
import Lists from './Lists/Lists';
import './Products.scss';

class Products extends Component {
  state = {
    selectedOption: '베스트',
    productLists: [],
    visibleCards: 8,
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

  handleLoadMoreBtn = () => {
    const { visibleCards } = this.state;
    this.setState({
      visibleCards: visibleCards + 8,
    });
  };

  render() {
    const { productLists, selectedOption, visibleCards } = this.state;
    return (
      <section className="products">
        <Headers selectedOption={selectedOption} />
        <div className="selectedOption"> {selectedOption}</div>
        <Lists productLists={productLists} visibleCards={visibleCards} />
        <button onClick={this.handleLoadMoreBtn}>Load More..</button>
      </section>
    );
  }
}

export default Products;
