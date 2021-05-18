import React, { Component } from 'react';
import DetailImages from './DetailImages';
import DetailInfo from './DetailInfo';
import DetailMiddle from './DetailMiddle';
import DetailReview from './DetailReview';
import { API_URL_yo } from '../../../config';
import './Detail.scss';

export default class Detail extends Component {
  state = {
    selectedProduct: [],
    isModalAlertOpen: false,
  };

  reviewRef = React.createRef();
  detailRef = React.createRef();

  componentDidMount() {
    fetch(API_URL_yo)
      .then(res => res.json())
      .then(data =>
        this.setState({
          selectedProduct: data.product,
        })
      );
  }

  toggleModalAlert = () => {
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

  moveToReviewSection = () => {
    this.reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  moveToDetailSection = () => {
    this.detailRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    const { selectedProduct, isModalAlertOpen } = this.state;
    return (
      <section className="detail">
        <main className="detailUpperMain">
          <DetailImages />
          <DetailInfo
            selectedProduct={selectedProduct}
            toggleModalAlert={this.toggleModalAlert}
            isModalOpen={isModalAlertOpen}
          />
        </main>
        <article className="detailLowerMain">
          <DetailMiddle
            moveToReviewSection={this.moveToReviewSection}
            detailRef={this.detailRef}
          />
          <DetailReview
            reviewRef={this.reviewRef}
            moveToDetailSection={this.moveToDetailSection}
          />
        </article>
      </section>
    );
  }
}
