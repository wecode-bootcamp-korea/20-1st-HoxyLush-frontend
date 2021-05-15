import React, { Component } from 'react';
import Modal from '../../components/Modal';
import AddToCart from './Components/AddToCart';
import Headers from './Components/Headers';
import Lists from './Components/Lists';

import './Products.scss';

class Products extends Component {
  state = {
    selectedOption: '베스트',
    productLists: [],
    visibleCards: 8,
    selectedCount: 1,
    unitPrice: 25000,
    isModalAlertOpen: false,
    isModalCartOpen: false,
  };

  componentDidMount() {
    const url = '/data/productList.json';
    fetch(url)
      .then(res => res.json())
      .then(productLists =>
        this.setState({
          productLists,
        })
      );
  }

  handleLoadMoreBtn = () => {
    const { visibleCards } = this.state;
    this.setState({
      visibleCards: visibleCards + 8,
    });
  };

  openModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
  };

  closeModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
  };

  openModalCart = () => {
    const { isModalCartOpen } = this.state;
    this.setState({
      isModalCartOpen: !isModalCartOpen,
    });
  };

  closeModalCart = () => {
    const { isModalCartOpen } = this.state;
    this.setState({
      isModalCartOpen: !isModalCartOpen,
    });
  };

  handleIncreaseCount = e => {
    const { selectedCount } = this.state;
    if (selectedCount < 4) {
      this.setState({
        selectedCount: selectedCount + 1,
      });
    } else {
      this.setState({
        selectedCount: 4,
      });

      this.openModalAlert();
    }
  };

  handleDecreaseCount = e => {
    const { selectedCount } = this.state;
    if (selectedCount - 1 < 1) return;

    const revisedCount = selectedCount - 1;
    this.setState({
      selectedCount: revisedCount,
    });
  };

  calculatePrice = () => {
    const { selectedCount, unitPrice } = this.state;
    const total = selectedCount * unitPrice;
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(total);
  };

  render() {
    const {
      productLists,
      selectedOption,
      visibleCards,
      selectedCount,
      isModalCartOpen,
      isModalAlertOpen,
    } = this.state;

    return (
      <>
        <section className="products">
          <Headers selectedOption={selectedOption} />
          <div className="selectedOption"> {selectedOption}</div>
          <Lists
            productLists={productLists}
            visibleCards={visibleCards}
            openModalAlert={this.openModalAlert}
            openModalCart={this.openModalCart}
          />
          <button id="loadMore" onClick={this.handleLoadMoreBtn}>
            <span>Load More</span>
          </button>
        </section>
        {isModalCartOpen ? (
          <Modal onClose={this.closeModalAlert}>
            <AddToCart
              increase={this.handleIncreaseCount}
              decrease={this.handleDecreaseCount}
              calculate={this.calculatePrice}
              selectedCount={selectedCount}
              onCloseModalAlert={this.closeModalAlert}
              onCloseModalCart={this.closeModalCart}
              isModalAlertOpen={isModalAlertOpen}
            />
          </Modal>
        ) : null}
      </>
    );
  }
}

export default Products;
