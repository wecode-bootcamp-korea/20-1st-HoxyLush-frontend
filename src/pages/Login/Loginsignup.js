import React, { Component } from 'react';
import './Loginsignup.scss';

class Loginsignup extends Component {
  render() {
    return (
      <div className="LoginsignupContainer">
        <div className="content">
          <div className="topBox">
            <h2>JOIN US</h2>
            <div>
              <span>정보입력</span>
              <span>가입완료</span>
            </div>
          </div>
          <div className="title">
            <h3>기본정보</h3>
            <span>표시는 반드시 입력하셔야 하는 항목입니다.</span>
          </div>
          <div className="tableBox">
            <tr>
              <th>
                <i class="fas fa-square-full "></i>아이디
              </th>
              <td>
                <div className="textField">
                  <input className="id" type="text"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <div className="textField">
                  <input className="pw" type="password"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td>
                <div className="textField">
                  <input className="checkPw" type="password"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <div className="textField">
                  <input className="name" type="text"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th>닉네임</th>
              <td>
                <div className="textField">
                  <input className="nickName" type="text"></input>
                </div>
              </td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>
                <div className="textFieldEmail">
                  <input className="email" type="text"></input>
                </div>
                <div className="chooseEmail">
                  <span>직접입력</span>
                  <i class="fas fa-chevron-down"></i>
                </div>
                <div className="formCheckBox">
                  <input className="phoneCheckBox" type="checkbox"></input>
                  <label>정보/이벤트 메일 수신에 동의합니다.</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>휴대폰번호</th>
              <td>
                <div className="textFieldPhoneNumber">
                  <input
                    className="phoneNumber"
                    type="text"
                    placeholder="-없이 입력하세요."
                  ></input>
                </div>
                <div className="formCheckBox">
                  <input className="phoneCheckBox" type="checkbox"></input>
                  <label>정보/이벤트 SMS 수신에 동의합니다.</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <td>
                <div className="textFieldAdressTop">
                  <div className="textFieldAdress">
                    <input className="adress" type="text"></input>
                  </div>
                  <button>우편번호검색</button>
                </div>
                <div className="textFieldAdressBottom">
                  <input className="adress" type="text"></input>
                </div>
                <div className="textFieldAdressBottom">
                  <input className="adress" type="text"></input>
                </div>
              </td>
            </tr>
          </div>
          <div className="btn">
            <button>회원가입</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginsignup;
