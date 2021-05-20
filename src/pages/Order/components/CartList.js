import React, { Component } from 'react';
import ProductInCart from './ProductInCart';
import Button from '../../../components/Button';
import { exchangeCurrency, hasObject } from '../../../uitilityFunc';
import { Link } from 'react-router-dom';
import './CartList.scss';

export default class CartList extends Component {
  calculateTotalPriceInCart = () => {
    const { productInCart } = this.props;
    const totalPrice = productInCart
      .filter(item => item.is_checked)
      .reduce((acc, { total_price }) => acc + total_price, 0);
    return totalPrice;
  };

  render() {
    const {
      productInCart,
      handleCheckBox,
      clearCart,
      removeProduct,
      handleAllCheckedBox,
    } = this.props;

    return (
      <section className="cartList">
        <div className="cartListProduct">제품</div>
        {hasObject(productInCart) ? (
          <table className="cartTable">
            <thead className="cartTableHead">
              <tr>
                <th>
                  <input
                    onChange={handleAllCheckedBox}
                    type="checkbox"
                    className="checkbox"
                    value="checkedAll"
                    checked={productInCart.every(product => product.is_checked)}
                  />
                </th>
                <th colspan="2">제품정보</th>
                <th>수량</th>
                <th>금액</th>
                <th className="priceCol">합계금액</th>
                <th>배송비</th>
              </tr>
            </thead>
            <tbody className="cartTableBody">
              {productInCart.map(product => {
                return (
                  <ProductInCart
                    product={product}
                    key={product.id}
                    handleCheckBox={handleCheckBox}
                    productCount={productInCart.length}
                    calculateTotalPriceInCart={this.calculateTotalPriceInCart}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="emptyCart">장바구니에 담겨있는 상품이 없습니다.</div>
        )}
        <div className="totalPriceInCart">
          <span>
            총 <strong>{productInCart.length} </strong>개의 금액
          </span>
          <span className="totalPriceInCart price">
            <strong>
              {productInCart.length
                ? exchangeCurrency(this.calculateTotalPriceInCart())
                : `₩ 0`}
            </strong>
          </span>
          <span>+</span>
          <span>배송비 </span>
          <span>
            <strong>무료</strong>
          </span>
          <span>=</span>
          <span>
            <strong>총 주문금액</strong>
          </span>
          <span className="totalOrderPrice">
            <strong>
              {productInCart.length
                ? exchangeCurrency(this.calculateTotalPriceInCart())
                : `₩ 0`}
            </strong>
          </span>
        </div>
        <button
          type="button"
          className="removeProductBtn"
          onClick={removeProduct}
        >
          삭제하기
        </button>
        <button type="button" className="resetCartBtn" onClick={clearCart}>
          장바구니 비우기
        </button>
        <div className="btnWrapperInCart">
          <Link to="/products">
            <Button name="쇼핑 계속하기" info="shoppingMore" />
          </Link>
          <Button name="주문하기" info="order" />
        </div>
      </section>
    );
  }
}
