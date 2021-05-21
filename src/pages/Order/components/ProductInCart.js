import React, { Component } from 'react';
import OrderCountControler from '../../../components/OrderCountControler';
import Modal from '../../../components/Modal';
import { CART_UPDATE_API, CART_API } from '../../../config';
import { exchangeCurrency } from '../../../utilityFunc';

export default class ProductInCart extends Component {
  state = {
    selectedProductQtyInCart: '',
    isModalAlertOpen: false,
  };

  componentDidMount() {
    const { product } = this.props;
    this.setState({
      selectedProductQtyInCart: product.quantity,
    });
  }

  sendToServer = count => {
    const { product, getDataFromServer } = this.props;

    const fetchUpdateOption = {
      method: 'PUT',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        option_id: product.option_id,
        quantity: count,
      }),
    };

    fetch(`${CART_UPDATE_API}/orders/cart`, fetchUpdateOption);
    getDataFromServer();
  };

  increaseCount = () => {
    const { selectedProductQtyInCart } = this.state;
    const updateCount = selectedProductQtyInCart + 1;
    this.setState({
      selectedProductQtyInCart: selectedProductQtyInCart + 1,
    });
    this.sendToServer(updateCount);
  };

  decreaseCount = () => {
    const { selectedProductQtyInCart } = this.state;
    const updateCount = selectedProductQtyInCart - 1;
    this.setState({
      selectedProductQtyInCart: selectedProductQtyInCart - 1,
    });
    this.sendToServer(updateCount);
  };

  calculatePrice = () => {
    const { selectedProductQtyInCart } = this.state;
    const { product, calculateTotalPriceInCart } = this.props;

    const totalPrice = selectedProductQtyInCart * product.price;
    calculateTotalPriceInCart(totalPrice);

    return exchangeCurrency(totalPrice);
  };

  toggleModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
  };

  render() {
    const { product, handleCheckBox } = this.props;
    const { selectedProductQtyInCart, isModalAlertOpen } = this.state;
    return (
      <>
        <tr>
          <td>
            <input
              type="checkbox"
              className="checkbox"
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
          <td className="unitPrice">{exchangeCurrency(product.price)}</td>
          <td className="totalPrice">{this.calculatePrice()}</td>
        </tr>

        {isModalAlertOpen && (
          <Modal type="AddToCart">
            <div className="outOfStockModal">
              <i
                className="fas fa-times modalClose"
                onClick={this.toggleModalAlert}
              ></i>
              <h1>잔여 재고 : {product.stock}개</h1>
              <p>현재 {product.stock}개 이상 주문이 어렵습니다.</p>
              <button className="outOfStockBtn" onClick={this.toggleModalAlert}>
                확인하기
              </button>
            </div>
          </Modal>
        )}
      </>
    );
  }
}
