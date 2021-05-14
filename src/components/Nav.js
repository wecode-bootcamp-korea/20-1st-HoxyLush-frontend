import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import PRODUCT_CATEGORYS from './productCategories';
import INTRODUCE_LUSH from './introduceLush';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      productCategoryWatch: '',
      introduceLushWatch: '',
    };
  }

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
    return (
      <nav className="nav">
        <div className="topNav">
          <div className="siteTitle">
            <Link className="goMain">HOXY LUSH</Link>
          </div>
          <ul className="navMenu">
            <li
              className="categories"
              onMouseOver={this.mouseOnProductCategory}
              onMouseOut={this.mouseOutProductCategory}
            >
              <div className="test222">
                <div
                  className={`categorySelectArrow ${this.state.productCategoryWatch}`}
                />
                <Link className="categoryLink">제품</Link>
              </div>
              <div
                className={`dropMenuContainer ${this.state.productCategoryWatch}`}
              >
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
              <div className="test222">
                <div
                  className={`categorySelectArrow ${this.state.introduceLushWatch}`}
                />
                <Link className="categoryLink">러쉬 소개</Link>
              </div>
              <div
                className={`dropMenuContainer ${this.state.introduceLushWatch}`}
              >
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
            <Link>
              <i className="fas fa-search"></i>
            </Link>
            <Link>
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link>
              <i className="fas fa-user-circle"></i>
            </Link>
          </div>
        </div>
        <div className="eventBannerContainer">
          <div className="eventBanner">
            <img alt="eventBanner" src="/images/eventbanner_4.png" />
            <Link className="goToEvent">이벤트 참여하기</Link>
          </div>
        </div>
      </nav>
    );
  }
}
