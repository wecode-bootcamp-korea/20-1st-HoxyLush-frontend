import React, { Component } from 'react';
import DetailImages from './DetailImages';
import DetailInfo from './DetailInfo';
import DetailMiddle from './DetailMiddle';
import DetailReview from './DetailReview';
import Modal from '../../../components/Modal';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
import { DETAIL_API } from '../../../config';
import './Detail.scss';

export default class Detail extends Component {
  state = {
    selectedProduct: {},
    isModalAlertOpen: false,
    isModalConfirmOpen: false,
  };

  reviewRef = React.createRef();
  detailRef = React.createRef();

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`${DETAIL_API}/products/${id}`)
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

  toggleModalConfirm = () => {
    const { isModalConfirmOpen } = this.state;
    this.setState({
      isModalConfirmOpen: !isModalConfirmOpen,
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
    const { selectedProduct, isModalAlertOpen, isModalConfirmOpen } =
      this.state;
    return (
      <>
        <section className="detail">
          <main className="detailUpperMain">
            <DetailImages selectedProduct={selectedProduct} />
            <DetailInfo
              selectedProduct={selectedProduct}
              toggleModalAlert={this.toggleModalAlert}
              toggleModalConfirm={this.toggleModalConfirm}
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

        {isModalConfirmOpen && (
          <Modal onClose={this.toggleModalConfirm}>
            <div className="outOfStockModal">
              <h1>상품이 장바구니에 담겼습니다.</h1>
              <p>바로 확인하시겠습니까?</p>
              <Link to="/products">
                <Button info="close" name="계속 쇼핑하기" />
              </Link>
              <Link to="/order">
                <Button info="confirm" name="확인하기" />
              </Link>
            </div>
          </Modal>
        )}
      </>
    );
  }
}
