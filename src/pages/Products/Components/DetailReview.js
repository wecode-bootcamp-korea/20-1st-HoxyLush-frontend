import React, { Component } from 'react';
import './DetailReview.scss';
import Review from './Review';

export default class DetailReview extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const url = '/data/review.json';
    fetch(url)
      .then(res => res.json())
      .then(data => data.review)
      .then(reviews => this.setState({ reviews }));
  }

  uploadReview = e => {
    e.preventDefault();
  };

  // rateStars = () => {
  //   // const { reviews } = this.state;
  //   console.log(reviews.rate)
  //   const star = [];
  //   for (let x = 0; x < 3; x++) {
  //     star.push(<i className="fas fa-star" />);
  //   }
  //   console.log(star);
  //   return star;
  // };

  render() {
    const { reviews } = this.state;
    const { reviewRef, moveToDetailSection } = this.props;

    return (
      <div className="detailReview" ref={reviewRef}>
        <div className="detailNavi">
          <div className="menu" onClick={moveToDetailSection}>
            상품상세정보
          </div>
          <div className="menu default">상품후기</div>
          <div className="menu">배송/교환 및 반품안내</div>
        </div>
        <div className="reviewHead">
          <h1 className="title">Product Reviews</h1>
          <span className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
          <span className="totalReviewNumber">424</span>
        </div>
        <div className="subtitle">
          나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!
        </div>

        {/* 로그인이 안되어 있을 시 input block 로직 구현 */}
        <form className="textAreaForm">
          <textarea id="textArea" cols="30" rows="10"></textarea>
          <div className="textAreaSubmit">
            <input type="file" id="file" />
            <label htmlFor="file" className="fileUpload">
              <i class="fas fa-camera-retro"></i>
            </label>
            <button id="reviewSubmitBtn" onClick={this.uploadReview}>
              후기작성
            </button>
          </div>
        </form>
        <ul className="reviewContainer">
          {reviews.map(review => {
            return (
              <Review
                key={review.id}
                review={review}
                rateStars={this.rateStars}
              />
            );
          })}
          {/* pagination 구현 예정 */}
        </ul>
      </div>
    );
  }
}
