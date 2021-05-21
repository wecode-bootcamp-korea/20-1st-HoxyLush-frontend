import React, { Component } from 'react';
import Modal from '../../components/Modal';
import AddToCart from './Components/AddToCart';
import Headers from './Components/Headers';
import Lists from './Components/Lists';
import Button from '../../components/Button';
import { PRODUCT_API, FILTER_API } from '../../config';
import { exchangeCurrency } from '../../utilityFunc';
import { Link } from 'react-router-dom';

import './Products.scss';

class Products extends Component {
  state = {
    selectedOption: '베스트',
    productLists: [],
    selectedProduct: {},
    isModalAlertOpen: false,
    isModalCartOpen: false,
    isModalConfirmOpen: false,
    currentPagination: 1,
  };

  componentDidMount() {
    fetch(`${PRODUCT_API}/products`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: data.Product_Info,
        })
      );
  }

  handleLoadMoreBtn = () => {
    const { productLists, currentPagination } = this.state;
    const nextPagination = currentPagination + 1;
    fetch(`${PRODUCT_API}/products?pagination=${nextPagination}&limit=4`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          productLists: [...productLists, ...data.Product_Info],
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

  toggleModalConfirm = () => {
    const { isModalConfirmOpen } = this.state;
    this.setState({
      isModalConfirmOpen: !isModalConfirmOpen,
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
    return exchangeCurrency(total);
  };

  filterByCategory = category => {
    this.setState({
      selectedOption: category,
    });
    //경래님 API 확인
    fetch(`$FILTER_API`).then().then();
  };

  render() {
    const {
      productLists,
      selectedOption,
      selectedProduct,
      isModalCartOpen,
      isModalAlertOpen,
      isModalConfirmOpen,
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
              event={this.handleLoadMoreBtn}
            />
          </div>
        </section>
        {isModalCartOpen && (
          <Modal onClose={this.toggleModalAlert} type={MODAL_TYPE}>
            <AddToCart
              increase={this.handleIncreaseCount}
              decrease={this.handleDecreaseCount}
              selectedProduct={selectedProduct}
              toggleModalCart={this.toggleModalCart}
              toggleModalAlert={this.toggleModalAlert}
              toggleModalConfirm={this.toggleModalConfirm}
              isModalAlertOpen={isModalAlertOpen}
              isModalConfirmOpen={isModalConfirmOpen}
            />
          </Modal>
        )}

        {isModalConfirmOpen && (
          <Modal type="AddToCart" onClose={this.toggleModalAlert}>
            <div className="orderSuccessModal">
              <h1>상품이 장바구니에 담겼습니다.</h1>
              <p>바로 확인하시겠습니까?</p>
              <div className="btns">
                <Button
                  name="계속 쇼핑하기"
                  info="close"
                  event={this.toggleModalConfirm}
                />
                <Link to="/order">
                  <Button name="확인하기" info="putInCart" />
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default Products;
const MODAL_TYPE = 'AddToCart';
