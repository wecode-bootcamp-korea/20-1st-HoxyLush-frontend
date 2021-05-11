import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="member">
          <h2>로그인</h2>
          <div className="loginBox">
            <ul>
              <li>
                <a href="#">회원</a>
              </li>
              <li>
                <a href="#">비회원</a>
              </li>
            </ul>
            <div className="loginInfo">
              <div className="loginInfoContainer">
                <div className="inputLogin">
                  <i class="fas fa-user-circle fa-lg"></i>
                  <input className="id" type="text" placeholder="아이디" />
                </div>
                <div className="inputLogin">
                  <i class="fas fa-lock fa-lg"></i>
                  <input
                    className="pw"
                    type="password"
                    placeholder="비밀번호"
                  />
                </div>
                <div className="saveIdBox">
                  <input type="checkbox" id="saveId" />
                  <label for="saveId">아이디저장</label>
                </div>
                <button className="loginButton" type="submit">
                  로그인
                </button>
                <div className="loginMenu">
                  <button className="signUp">회원가입</button>
                  <button className="findId">아이디 찾기</button>
                  <button className="findPw">비밀번호 찾기</button>
                </div>
              </div>
              <a href="#" className="naverLoginBox">
                <i class="fab fa-neos fa-2x"></i>
                네이버 아이디로 로그인
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
