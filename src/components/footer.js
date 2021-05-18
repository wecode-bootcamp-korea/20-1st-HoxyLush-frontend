import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img
          alt="footer banner"
          className="footerBannerImage"
          src="/images/footerImage.png"
        />

        <section className="footerContainer">
          <div className="leftFooterContainer">
            <div className="leftFooter">
              <div className="hoxylushTitle">HOXY</div>
              <div className="hoxylushTitle">LUSH</div>
              <ul className="hoxylushOperationInfo">
                <li>고객센터 1644-2357</li>
                <li>webmaster@lush.co.kr</li>
                <li>{`상담전화 13:00~16:00(평일)`}</li>
                <li>{`상담톡 10:00~16:00(평일)`}</li>
                <li>기업선물 070-4713-8543</li>
                <li>order@lush.co.kr</li>
              </ul>
            </div>
          </div>
          <div className="rightFooterContainer">
            <div className="rightFooter">
              <ul className="companyInfoList">
                <li className="companyInfo">스카우트</li>
                <li className="companyInfo">회사소개</li>
                <li className="companyInfo">개인정보처리방침</li>
                <li className="companyInfo">영상정보처리방침</li>
                <li className="companyInfo">이용약관</li>
                <li className="companyInfo">고객센터</li>
              </ul>
              <div>
                <input
                  type="text"
                  placeholder="이메일 주소를 입력해 주세요."
                ></input>
                <button>구독하기</button>
              </div>
              <div>
                매주 금요일 오후, 구독자님을 위한 제품과 브랜드 이야기를
                전해드립니다.
              </div>
              <div>
                구독은 언제든지 해지하실 수 있습니다. <span>미리보기</span>
              </div>
              <div>{`서울특별시 서초구 서운로 138(서초동아타워) 6층 | 사이트 운영자 : 주식회사 러쉬코리아 | 대표이사 : 우미령`}</div>
              <div>{`사업자 등록번호 : 201-81-77964 사업자정보확인 | 통신판매업 신고번호 : 2012-서울서초-0647 | 개인정보보호책임자 : 우승용`}</div>
              <div>COPYRIGHT ⓒ LUSHKOREA CO. LTD. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
