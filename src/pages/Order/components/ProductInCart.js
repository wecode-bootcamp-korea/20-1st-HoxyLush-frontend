import React, { Component } from 'react';

export default class ProductInCart extends Component {
  render() {
    const { product, handleCheckBox } = this.props;
    return (
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
          <form>
            <button type="button">
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="text"
              value={product.quantity}
              checked={product.is_checked}
            />
            <button type="button">
              <i className="fas fa-plus"></i>
            </button>
          </form>
        </td>
        <td className="unitPrice">
          {new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
          }).format(product.price)}
        </td>
        <td className="totalPrice">
          {new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
          }).format(product.total_price)}
        </td>
      </tr>
    );
  }
}
