import React, { Component } from 'react';
import './DetailReview.scss';

export default class DetailReview extends Component {
  uploadReview = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="detailReview">
        <div className="detailNavi">
          <div className="menu">상품상세정보</div>
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
          <li className="reviewWrapper">
            <div className="reviewLeft">
              <span className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="reveiwedDate">2021.05.12</span>
              <span className="reveiwFrom">네이버페이 구매자</span>
            </div>
            <div className="reviewRight">
              <div className="reveiwContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora voluptas molestias iste cum veniam eligendi placeat,
                culpa aliquid officia ut. Maxime voluptatibus voluptatum debitis
                asperiores! Enim soluta nulla illo provident quaerat corporis
                molestias ipsam, eum autem, architecto quam placeat aut odio,
                aliquam ab doloremque. Labore rerum nostrum ratione ipsam quis!
              </div>
            </div>
          </li>
          <li className="reviewWrapper">
            <div className="reviewLeft">
              <span className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="reveiwedDate">2021.05.12</span>
              <span className="reveiwFrom">네이버페이 구매자</span>
            </div>
            <div className="reviewRight">
              <div className="reveiwContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora voluptas molestias iste cum veniam eligendi placeat,
                culpa aliquid officia ut. Maxime voluptatibus voluptatum debitis
                asperiores! Enim soluta nulla illo provident quaerat corporis
                molestias ipsam, eum autem, architecto quam placeat aut odio,
                aliquam ab doloremque. Labore rerum nostrum ratione ipsam quis!
              </div>
            </div>
          </li>{' '}
          <li className="reviewWrapper">
            <div className="reviewLeft">
              <span className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="reveiwedDate">2021.05.12</span>
              <span className="reveiwFrom">네이버페이 구매자</span>
            </div>
            <div className="reviewRight">
              <div className="reveiwContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora voluptas molestias iste cum veniam eligendi placeat,
                culpa aliquid officia ut. Maxime voluptatibus voluptatum debitis
                asperiores! Enim soluta nulla illo provident quaerat corporis
                molestias ipsam, eum autem, architecto quam placeat aut odio,
                aliquam ab doloremque. Labore rerum nostrum ratione ipsam quis!
              </div>
            </div>
          </li>
          <li className="reviewWrapper">
            <div className="reviewLeft">
              <span className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="reveiwedDate">2021.05.12</span>
              <span className="reveiwFrom">네이버페이 구매자</span>
            </div>
            <div className="reviewRight">
              <div className="reveiwContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora voluptas molestias iste cum veniam eligendi placeat,
                culpa aliquid officia ut. Maxime voluptatibus voluptatum debitis
                asperiores! Enim soluta nulla illo provident quaerat corporis
                molestias ipsam, eum autem, architecto quam placeat aut odio,
                aliquam ab doloremque. Labore rerum nostrum ratione ipsam quis!
              </div>
            </div>
          </li>
          <li className="reviewWrapper">
            <div className="reviewLeft">
              <span className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </span>
              <span className="reveiwedDate">2021.05.12</span>
              <span className="reveiwFrom">네이버페이 구매자</span>
            </div>
            <div className="reviewRight">
              <div className="reveiwContent">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora voluptas molestias iste cum veniam eligendi placeat,
                culpa aliquid officia ut. Maxime voluptatibus voluptatum debitis
                asperiores! Enim soluta nulla illo provident quaerat corporis
                molestias ipsam, eum autem, architecto quam placeat aut odio,
                aliquam ab doloremque. Labore rerum nostrum ratione ipsam quis!
              </div>
            </div>
          </li>
          {/* pagination 구현 예정 */}
        </ul>
      </div>
    );
  }
}
