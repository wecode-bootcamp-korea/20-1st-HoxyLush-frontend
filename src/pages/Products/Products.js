import React, { Component } from 'react';
import Modal from '../../components/Modal';
import AddToCart from './Components/AddToCart';
import Headers from './Components/Headers';
import Lists from './Components/Lists';
import Button from '../../components/Button';
// import Button from '../';
import { PRODUCT_API } from '../../config';

import './Products.scss';

class Products extends Component {
  state = {
    selectedOption: '베스트', //수정 예정
    productLists: [],
    selectedProduct: '',
    isModalAlertOpen: false,
    isModalCartOpen: false,
  };

  componentDidMount() {
    fetch(`${PRODUCT_API}/products`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: data.product_info,
        })
      );
  }

  handleLoadMoreBtn = () => {
    const { productLists } = this.state;
    fetch(`${PRODUCT_API}/products?pagination=1&limit=13`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: [...productLists, ...data.product_info],
        })
      );
  };

  toggleModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
  };

  toggleModalCart = id => {
    const { isModalCartOpen, productLists } = this.state;
    this.setState({
      isModalCartOpen: !isModalCartOpen,
      selectedProduct: productLists.filter(product => product.id === id),
    });
  };

  handleIncreaseCount = e => {
    const { selectedCount, selectedProduct } = this.state;

    if (selectedCount === selectedProduct.option[0].stock) {
      this.toggleModalAlertAlert();
      return;
    }

    this.setState({
      selectedCount: selectedCount + 1,
    });
  };

  handleDecreaseCount = e => {
    const { selectedCount } = this.state;
    if (selectedCount - 1 < 1) return;

    this.setState({
      selectedCount: selectedCount - 1,
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
            toggleModalAlert={this.toggleModalAlert}
            toggleModalCart={this.toggleModalCart}
          />
          <button
            type="submit"
            className="loadMore"
            onClick={this.handleLoadMoreBtn}
          >
            <span>Load More</span>
          </button>

          <Button />
        </section>
        {isModalCartOpen && (
          <Modal onClose={this.toggleModalAlert}>
            <AddToCart
              increase={this.handleIncreaseCount}
              decrease={this.handleDecreaseCount}
              selectedProduct={selectedProduct}
              toggleModalCart={this.toggleModalCart}
              toggleModalAlert={this.toggleModalAlert}
              isModalAlertOpen={isModalAlertOpen}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default Products;
