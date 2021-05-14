import React, { Component } from 'react';
import DetailImages from './DetailImages';
import DetailInfo from './DetailInfo';
import DetailMiddle from './DetailMiddle';
import DetailReview from './DetailReview';
import './Detail.scss';

export default class Detail extends Component {
  state = {
    selectedProduct: [],
    selectedCount: 1,
    unitPrice: 25000,
    isModalOpen: false,
  };

  componentDidMount() {
    const url = '/data/productList.json';
    fetch(url)
      .then(res => res.json())
      .then(selectedProduct =>
        this.setState({
          selectedProduct,
        })
      );
  }

  openModal = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  closeModal = () => {
    const { isModalOpen } = this.state;
    this.setState({
      isModalOpen: !isModalOpen,
    });
  };

  handleIncreaseCount = e => {
    e.preventDefault();
    const { selectedCount } = this.state;
    if (selectedCount < 4) {
      this.setState({
        selectedCount: selectedCount + 1,
      });
    } else {
      this.setState({
        selectedCount: 4,
      });

      this.openModal();
    }
  };

  handleDecreaseCount = e => {
    e.preventDefault();
    const { selectedCount } = this.state;
    if (selectedCount - 1 < 1) return;

    const revisedCount = selectedCount - 1;
    this.setState({
      selectedCount: revisedCount,
    });
  };

  calculatePrice = () => {
    const { selectedCount, unitPrice } = this.state;
    const total = selectedCount * unitPrice;
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(total);
  };

  render() {
    const { selectedCount, isModalOpen } = this.state;
    return (
      <section className="detail">
        <main className="detailUpperMain">
          <DetailImages />
          <DetailInfo
            increase={this.handleIncreaseCount}
            decrease={this.handleDecreaseCount}
            calculate={this.calculatePrice()}
            selectedCount={selectedCount}
            closeModal={this.closeModal}
            isModalOpen={isModalOpen}
          />
        </main>
        <article className="detailLowerMain">
          <DetailMiddle />
          <DetailReview />
        </article>
      </section>
    );
  }
}
