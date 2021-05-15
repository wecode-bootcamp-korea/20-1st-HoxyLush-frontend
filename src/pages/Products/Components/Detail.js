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
    isModalAlertOpen: false,
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

  openModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
  };

  closeModalAlert = () => {
    const { isModalAlertOpen } = this.state;
    this.setState({
      isModalAlertOpen: !isModalAlertOpen,
    });
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

      this.openModalAlert();
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
    const { selectedCount, unitPrice } = this.state;
    const total = selectedCount * unitPrice;
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(total);
  };

  render() {
    const { selectedCount, isModalAlertOpen } = this.state;
    return (
      <section className="detail">
        <main className="detailUpperMain">
          <DetailImages />
          <DetailInfo
            increase={this.handleIncreaseCount}
            decrease={this.handleDecreaseCount}
            calculate={this.calculatePrice()}
            selectedCount={selectedCount}
            closeModalAlert={this.closeModalAlert}
            isModalOpen={isModalAlertOpen}
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
