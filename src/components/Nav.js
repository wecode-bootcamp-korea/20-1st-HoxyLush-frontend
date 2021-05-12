import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import PRODUCTCATEGORYS from './productCategorys';
import INTRODUCELUSH from './introduceLush';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      productCategory: [],
      introduceLush: [],
      productCategoryWatch: '',
      introduceLushWatch: '',
    };
  }

  componentDidMount() {
    this.setState({
      productCategory: PRODUCTCATEGORYS,
      introduceLush: INTRODUCELUSH,
    });
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
              className="categorys"
              onMouseOver={this.mouseOnProductCategory}
              onMouseOut={this.mouseOutProductCategory}
            >
              <Link className="categoryLink">제품</Link>
              <div
                className={
                  this.state.productCategoryWatch
                    ? 'Categoryvisible'
                    : 'invisible'
                }
              >
                <div className="categorySelectArrow"></div>
                <div className="productDropMenu">
                  {this.state.productCategory.map(productCategory => {
                    return (
                      <ul className="best">
                        <li className="categoryType1">
                          <Link>{productCategory.category}</Link>
                        </li>

                        {productCategory.types.map(productCategorytypes => {
                          return (
                            <li className="categoryType2">
                              <Link>{productCategorytypes}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </li>
            <li
              className="categorys"
              onMouseOver={this.mouseOnIntroduceLushCategory}
              onMouseOut={this.mouseOutIntroduceLushCategory}
            >
              <Link className="categoryLink">러쉬 소개</Link>
              <div
                className={
                  this.state.introduceLushWatch
                    ? 'Categoryvisible'
                    : 'invisible'
                }
              >
                <div className="categorySelectArrow"></div>
                <div className="productDropMenu">
                  {this.state.introduceLush.map(introduceLush => {
                    return (
                      <ul className="best">
                        <li className="categoryType1">
                          <Link>{introduceLush.category}</Link>
                        </li>

                        {introduceLush.types &&
                          introduceLush.types.map(introduceLush => {
                            return (
                              <li className="categoryType2">
                                <Link>{introduceLush}</Link>
                              </li>
                            );
                          })}
                      </ul>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="categorys">
              <Link className="categoryLink">매장 안내</Link>
            </li>
            <li className="categorys">
              <Link className="categoryLink">스파</Link>
            </li>
            <li className="categorys">
              <Link className="categoryLink">이벤트</Link>
            </li>
          </ul>
          <div className="navIcons">
            <Link>
              <i class="fas fa-search"></i>
            </Link>
            <Link>
              <i class="fas fa-shopping-cart"></i>
            </Link>
            <Link>
              <i class="fas fa-user-circle"></i>
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
