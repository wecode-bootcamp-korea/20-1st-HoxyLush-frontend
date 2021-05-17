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
    isModalAlertOpen: false,
    isModalCartOpen: false,
    selectedProduct: [],
  };

  componentDidMount() {
    const url = 'http://10.58.2.127:8000/products/product-list';
    // const url = '/data/productList.json';
    fetch(url)
      .then(res => res.json())
      .then(data => data.product_info)
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

  openModalCart = id => {
    const { isModalCartOpen } = this.state;
    this.setState({
      isModalCartOpen: !isModalCartOpen,
    });

    const url = '/data/selectedProduct.json'; //전달받은 id로 데이터 받아오기
    fetch(url)
      .then(res => res.json())
      .then(data => data.product[0])
      .then(selectedProduct =>
        this.setState({
          selectedProduct,
        })
      );
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
    const { selectedCount, selectedProduct } = this.state;
    const total = selectedCount * selectedProduct.price;
    console.log(total);
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
      selectedProduct,
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
              // calculate={this.calculatePrice}
              selectedProduct={selectedProduct}
              closeModalAlert={this.closeModalAlert}
              closeModalCart={this.closeModalCart}
              openModalAlert={this.openModalAlert}
              isModalAlertOpen={isModalAlertOpen}
            />
          </Modal>
        ) : null}
      </>
    );
  }
}

export default Products;
