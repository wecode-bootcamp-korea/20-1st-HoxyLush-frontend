import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import PRODUCT_CATEGORYS from './productCategories';
import INTRODUCE_LUSH from './introduceLush';
import { BASCKET_API } from '../config';
import NavSearchModal from './NavSearchModal';
import Modal from '../components/Modal';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      productCategoryWatch: '',
      introduceLushWatch: '',
      basketProductCount: '',
      navSearchModal: false,
    };
  }
  // 현재 장바구니 담긴 상품 갯수 렌더링 로직, 문법에러나서 주석처리
  // componentDidMount() {
  //   if (localStorage.getItem('accessToken')) {
  //     fetch(`${BASCKET_API}/orders/cart`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: localStorage.getItem('accessToken'),
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(loginUserInfo => {
  //         this.setState({
  //           basketProductCount: loginUserInfo.selectedQty.length,
  //         });
  //       });
  //   }
  // }

  closeNavSearchModal = e => {
    const { navSearchModal } = this.state;
    this.setState({ navSearchModal: !navSearchModal });
  };

  mouseOnProductCategory = e => {
    this.setState({ productCategoryWatch: 'visible' });
  };

  mouseOutProductCategory = e => {
    this.setState({ productCategoryWatch: '' });
  };

  mouseOnIntroduceLushCategory = e => {
    this.setState({ introduceLushWatch: 'visible' });
  };

  mouseOutIntroduceLushCategory = e => {
    this.setState({ introduceLushWatch: '' });
  };

  render() {
    const { productCategoryWatch, introduceLushWatch, basketProductCount } =
      this.state;
    console.log(this.state.navSearchModal);
    return (
      <nav className="nav">
        <div className="topNav">
          <div className="siteTitle">
            <Link className="goMain" to="/">
              <span className="mainTitle">HOXY</span>
              <span className="mainTitle">LUSH</span>
            </Link>
          </div>
          <ul className="navMenu">
            <li
              className="categories"
              onMouseOver={this.mouseOnProductCategory}
              onMouseOut={this.mouseOutProductCategory}
            >
              <div className="categoryContainer">
                <div
                  className={`categorySelectArrow ${productCategoryWatch}`}
                />
                <Link className="categoryLink">제품</Link>
              </div>
              <div className={`dropMenuContainer ${productCategoryWatch}`}>
                <div className="productDropMenu">
                  {PRODUCT_CATEGORYS.map(productCategorydata => {
                    return (
                      <ul key={productCategorydata.id} className="categoryList">
                        <li className="categoryHead">
                          <Link>{productCategorydata.category}</Link>
                        </li>
                        {productCategorydata.types.map(
                          (productCategorytypes, index) => {
                            return (
                              <li className="categoryDetail" key={index}>
                                <Link>{productCategorytypes}</Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </li>
            <li
              className="categories"
              onMouseOver={this.mouseOnIntroduceLushCategory}
              onMouseOut={this.mouseOutIntroduceLushCategory}
            >
              <div className="categoryContainer">
                <div className={`categorySelectArrow ${introduceLushWatch}`} />
                <Link className="categoryLink">러쉬 소개</Link>
              </div>
              <div className={`dropMenuContainer ${introduceLushWatch}`}>
                <div className="productDropMenu">
                  {INTRODUCE_LUSH.map(introduction => {
                    return (
                      <ul className="categoryList" key={introduction.id}>
                        <li className="categoryHead">
                          <Link>{introduction.category}</Link>
                        </li>

                        {introduction.types &&
                          introduction.types.map(
                            (introductiondetail, index) => {
                              return (
                                <li key={index} className="categoryDetail">
                                  <Link>{introductiondetail}</Link>
                                </li>
                              );
                            }
                          )}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="categories">
              <Link className="categoryLink">매장 안내</Link>
            </li>
            <li className="categories">
              <Link className="categoryLink">스파</Link>
            </li>
            <li className="categories">
              <Link className="categoryLink">이벤트</Link>
            </li>
          </ul>
          <div className="navIcons">
            <i className="fas fa-search" onClick={this.closeNavSearchModal}></i>
            <Link className="shoppingBasket" to="orders">
              <i className="fas fa-shopping-cart"></i>
              <div className="basketProductNumber">{basketProductCount}</div>
            </Link>
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
        <div className="eventBannerContainer">
          <div className="eventBanner">
            <img alt="eventBanner" src="/images/eventbanner_4.png" />
            <Link className="goToEvent">이벤트 참여하기</Link>
          </div>
        </div>
        {this.state.navSearchModal && (
          <Modal>
            <NavSearchModal closeNavSearchModal={this.closeNavSearchModal} />
          </Modal>
        )}
      </nav>
    );
  }
}
