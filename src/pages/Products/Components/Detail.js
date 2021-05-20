import React, { Component } from 'react';
import DetailImages from './DetailImages';
import DetailInfo from './DetailInfo';
import DetailMiddle from './DetailMiddle';
import DetailReview from './DetailReview';
import { DETAIL_API } from '../../../config';
import './Detail.scss';

export default class Detail extends Component {
  state = {
    selectedProduct: {},
    isModalAlertOpen: false,
  };

  reviewRef = React.createRef();
  detailRef = React.createRef();

  componentDidMount() {
    console.log(this.props);
    // const id = this.props.match.params.id;
    // fetch(`${DETAIL_API}/products/${id}`)
    fetch(`${DETAIL_API}/products/12`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          selectedProduct: data.result,
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
          <DetailImages selectedProduct={selectedProduct} />
          <DetailInfo
            selectedProduct={selectedProduct}
            toggleModalAlert={this.toggleModalAlert}
            isModalOpen={isModalAlertOpen}
          />
        </main>
        <article className="detailLowerMain">
          <DetailMiddle
            selectedProduct={selectedProduct}
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
