import React, { Component } from 'react';

export default class OrderCountControler extends Component {
  handleIncreaseCount = e => {
    const { selectedProduct, selectedCount, increaseCount, toggleModalAlert } =
      this.props;

    if (selectedCount === selectedProduct.stock) {
      toggleModalAlert();
      return;
    }

    increaseCount();
  };

  handleDecreaseCount = e => {
    const { selectedCount, decreaseCount } = this.props;

    if (selectedCount - 1 < 1) return;
    decreaseCount();
  };

  render() {
    const { selectedCount } = this.props;

    return (
      <form>
        <button type="button" onClick={this.handleDecreaseCount}>
          <i className="fas fa-minus"></i>
        </button>
        <input type="text" value={selectedCount} />
        <button type="button" onClick={this.handleIncreaseCount}>
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}
