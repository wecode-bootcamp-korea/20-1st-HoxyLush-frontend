import React, { Component } from 'react';
import ProductInCart from './ProductInCart';
import Button from '../../../components/Button';
import './CartList.scss';

export default class CartList extends Component {
  // state = {
  //   productInCart: [],
  // };

  // componentDidMount() {
  //   const url = '/data/cart.json';
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         productInCart: data.cart_info,
  //       })
  //     );
  // }

  // handleCheckBox = e => {
  //   const { productInCart } = this.state;
  //   const arr = productInCart.map(item => {
  //     if (item.name === e.target.value) {
  //       return { ...item, is_checked: !item.is_checked };
  //     } else {
  //       return item;
  //     }
  //   });

  //   this.setState({ productInCart: arr });
  // };

  // removeProduct = () => {
  //   const { productInCart } = this.state;
  //   this.setState({
  //     productInCart: productInCart.filter(item => !item.is_checked),
  //   });
  // };

  // clearCart = () => {
  //   const { productInCart } = this.state;

  //   productInCart.length &&
  //     this.setState({
  //       productInCart: [],
  //     });
  // };

  calculateTotalPriceInCart = () => {
    const { productInCart } = this.props;
    const checkedProduct = [];
    productInCart.forEach(item => item.is_checked && checkedProduct.push(item));

    return checkedProduct.reduce((acc, cur) => acc + cur.total_price, 0);
  };

  render() {
    const { productInCart, handleCheckBox, clearCart, removeProduct } =
      this.props;
    return (
      <section className="cartList">
        <div className="cartListProduct">제품</div>
        {productInCart.length ? (
          <table className="cartTable">
            <thead className="cartTableHead">
              <tr>
                <th>
                  <input
                    onChange={this.handleAllCheckedBox}
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
              {new Intl.NumberFormat('ko-KR', {
                style: 'currency',
                currency: 'KRW',
              }).format(this.calculateTotalPriceInCart())}
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
              {new Intl.NumberFormat('ko-KR', {
                style: 'currency',
                currency: 'KRW',
              }).format(this.calculateTotalPriceInCart())}
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
          <Button name="쇼핑 계속하기" info="shoppingMore" />
          <Button name="주문하기" info="order" />
        </div>
      </section>
    );
  }
}
