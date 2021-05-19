import React, { Component } from 'react';
import Modal from '../../components/Modal';
import AddToCart from './Components/AddToCart';
import Headers from './Components/Headers';
import Lists from './Components/Lists';
import Button from '../../components/Button';
import { PRODUCT_API } from '../../config';

import './Products.scss';

class Products extends Component {
  state = {
    selectedOption: '베스트',
    productLists: [],
    selectedProduct: {},
    isModalAlertOpen: false,
    isModalCartOpen: false,
    currentPagination: 1,
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
    const { productLists, currentPagination } = this.state;
    const nextPagination = currentPagination + 1;
    fetch(`${PRODUCT_API}/products?pagination=${nextPagination}&limit=13`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: [...productLists, ...data.product_info],
          currentPagination: nextPagination,
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
      selectedProduct: productLists.find(product => product.id === id),
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

  filterByCategory = category => {
    this.setState({
      selectedOption: category,
    });
    //경래님 API 확인
  };

  render() {
    const {
      productLists,
      selectedOption,
      selectedProduct,
      isModalCartOpen,
      isModalAlertOpen,
    } = this.state;

    const categories = [
      '베스트',
      '주간베스트',
      '별 다섯개 후기',
      '온라인 전용',
      '국내제조',
      '네이키드',
      '리틀 러쉬',
    ];

    return (
      <>
        <section className="products">
          <Headers selectedOption={selectedOption} />
          <div className="selectedOption"> {selectedOption}</div>
          <ul className="categories">
            {categories.map(category => {
              return (
                <li
                  onClick={e => this.filterByCategory(e.target.dataset.name)}
                  data-name={category}
                >
                  {category}
                </li>
              );
            })}
          </ul>
          <Lists
            productLists={productLists}
            toggleModalAlert={this.toggleModalAlert}
            toggleModalCart={this.toggleModalCart}
          />
          <div className="loadMoreBtnWrapper">
            <Button
              info="loadMore"
              name="Load More"
              onClick={this.handleLoadMoreBtn}
            />
          </div>
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
