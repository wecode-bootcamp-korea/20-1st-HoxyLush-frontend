import React, { Component } from 'react';
import OrderCountControler from '../../../components/OrderCountControler';
import Modal from '../../../components/Modal';

export default class ProductInCart extends Component {
  state = {
    selectedProductQtyInCart: '',
    isModalAlertOpen: false,
  };

  componentDidMount() {
    const { product } = this.props;
    this.setState({
      selectedProductQtyInCart: product.quantity,
      selectedProductPriceInCart: product.total_price,
    });
  }

  increaseCount = () => {
    const { selectedProductQtyInCart } = this.state;

    this.setState({
      selectedProductQtyInCart: selectedProductQtyInCart + 1,
    });
    // updateOrder();
  };

  decreaseCount = () => {
    const { selectedProductQtyInCart } = this.state;

    this.setState({
      selectedProductQtyInCart: selectedProductQtyInCart - 1,
    });
    // updateOrder();
  };

  calculatePrice = () => {
    const { selectedProductQtyInCart } = this.state;
    const { product, calculateTotalPriceInCart } = this.props;

    const totalPrice = selectedProductQtyInCart * product.price;
    calculateTotalPriceInCart(totalPrice);

    const finalPrice = new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(totalPrice);
    return finalPrice;
  };

  toggleModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
  };

  render() {
    const { selectedProductQtyInCart, isModalAlertOpen } = this.state;
    const { product, handleCheckBox } = this.props;
    return (
      <>
        <tr>
          <td>
            <input
              type="checkbox"
              id="checkbox"
              onChange={handleCheckBox}
              value={product.name}
              checked={product.is_checked}
            />
          </td>
          <td className="imageInCart">
            <img src={product.product_image} alt="러쉬" />
          </td>
          <td className="ProductNameInCart">{product.name}</td>
          <td>
            <OrderCountControler
              selectedProduct={product}
              selectedCount={selectedProductQtyInCart}
              toggleModalAlert={this.toggleModalAlert}
              increaseCount={this.increaseCount}
              decreaseCount={this.decreaseCount}
            />
          </td>
          <td className="unitPrice">
            {new Intl.NumberFormat('ko-KR', {
              style: 'currency',
              currency: 'KRW',
            }).format(product.price)}
          </td>
          <td className="totalPrice">{this.calculatePrice()}</td>
        </tr>

        {isModalAlertOpen ? (
          <Modal>
            <div className="outOfStockModal">
              <i
                id="modalClose"
                className="fas fa-times"
                onClick={this.closeModalAlert}
              ></i>
              <h1>잔여 재고 : {product.stock}개</h1>
              <p>현재 {product.stock}개 이상 주문이 어렵습니다.</p>
              <button id="outOfStockBtn" onClick={this.toggleModalAlert}>
                확인하기
              </button>
            </div>
          </Modal>
        ) : null}
      </>
    );
  }
}
