import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="topNav">
          <div className="mainPage">HOXY LUSH</div>
          <ul>
            <li>제품</li>
            <li>러쉬 소개</li>
            <li>매장 안내</li>
            <li>스파</li>
            <li>이벤트</li>
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
        <div className="eventBanner">
          <img
            alt="eventBanner"
            src="http://lush.co.kr/data/skin/front/howling/img/etc/main_banner_top.jpg"
          />
        </div>
      </nav>
    );
  }
}
