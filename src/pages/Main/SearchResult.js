import React, { Component } from 'react';
import Modal from '../../components/Modal';
import AddToCart from '../Products/Components/AddToCart';
import Lists from '../Products/Components/Lists';
import { PRODUCT_API } from '../../config';
import Nav from '../../components/Nav';

import './SearchResult.scss';

class Products extends Component {
  state = {
    productLists: [],
    visibleCards: 8,
    isModalAlertOpen: false,
    isModalCartOpen: false,
    selectedProduct: [],
  };

  componentDidMount() {
    const keyword = this.props.location.search;
    this.setState({ selectedOption: keyword.slice(9, keyword.length) });
    fetch(`${PRODUCT_API}/products${keyword}`)
      .then(res => res.json())
      .then(searchdata =>
        this.setState({
          productLists: searchdata.Product_Info,
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

  toggleModalCart = id => {
    const { isModalCartOpen } = this.state;
    this.setState({
      isModalCartOpen: !isModalCartOpen,
    });

    const url = '/data/selectedProduct.json'; //전달받은 id로 데이터 받아오기
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          selectedProduct: data.product[0],
        })
      );
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

      this.toggleModalAlertAlert();
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
    const keyword = this.props.location.search;

    return (
      <>
        <section className="products">
          <Nav />
          <div className="selectedOption">{`[${keyword.slice(
            9,
            keyword.length
          )}] 검색결과`}</div>

          <Lists
            productLists={productLists}
            visibleCards={visibleCards}
            toggleModalAlert={this.toggleModalAlert}
            toggleModalCart={this.toggleModalCart}
          />
          {productLists.length ? (
            <button
              ClassName="loadMore"
              onClick={this.handleLoadMoreBtn}
              type="button"
            >
              <span>Load More</span>
            </button>
          ) : (
            <p className="resultNothing">상품이 존재하지 않습니다.</p>
          )}
        </section>
        {isModalCartOpen && (
          <Modal onClose={this.toggleModalAlert}>
            <AddToCart
              increase={this.handleIncreaseCount}
              decrease={this.handleDecreaseCount}
              // calculate={this.calculatePrice}
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
