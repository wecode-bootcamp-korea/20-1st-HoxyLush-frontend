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
    const url = 'http://192.168.255.253:8000/products/products-list';
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: data.product_info,
        })
      );
  }

  handleLoadMoreBtn = () => {
    const { visibleCards } = this.state;
    this.setState({
      visibleCards: visibleCards + 8,
    });
  };

  toggleModalAlert = () => {
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

  toggleModalCart = () => {
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

      this.toggleModalAlert();
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
          <ul className="subCategories">
            <li>전체</li>
            <li>주간베스트</li>
            <li>별 다섯개 후기</li>
            <li>온라인 전용</li>
            <li>국내제조</li>
            <li>네이키드</li>
            <li>리틀 러쉬</li>
          </ul>
          <Lists
            productLists={productLists}
            visibleCards={visibleCards}
            toggleModalAlert={this.toggleModalAlert}
            openModalCart={this.openModalCart}
          />
          <button id="loadMore" onClick={this.handleLoadMoreBtn}>
            <span>Load More</span>
          </button>
        </section>
        {isModalCartOpen ? (
          <Modal onClose={this.toggleModalAlert}>
            <AddToCart
              increase={this.handleIncreaseCount}
              decrease={this.handleDecreaseCount}
              calculate={this.calculatePrice}
              selectedCount={selectedCount}
              toggleModalAlert={this.toggleModalAlertt}
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
