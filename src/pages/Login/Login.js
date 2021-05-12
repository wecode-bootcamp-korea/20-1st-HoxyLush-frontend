import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { idValue, pwValue } = this.state;
    if (!idValue) {
      alert('아이디를 입력해주세요');
    } else if (!pwValue) {
      alert('패스워드를 입력해주세요');
      return;
    }
    fetch('API', {
      method: 'POST',
      body: JSON.stringify({
        id: idValue,
        pw: pwValue,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUSSES') {
          this.props.history.push('/Main');
        } else {
          alert('회원정보를 찾을수없습니다.');
        }
      });
  };

  checkValid = () => {
    const { idValue, pwValue } = this.state;
    const reg = /^[a-z0-9_]{4,20}$/;
    const isValidId = reg.test(idValue);
    const isValidPw = pwValue.length > 9;
    return isValidId && isValidPw;
  };

  render() {
    console.log(this.state);
    return (
      <div className="loginContainer">
        <div className="member">
          <h1>로그인</h1>
          <div className="loginBox">
            <ul>
              <li>
                <a className="mem" href="#/">
                  회원
                </a>
              </li>
              <li>
                <a className="nonmem" href="#/">
                  비회원
                </a>
              </li>
            </ul>
            <div className="loginInfo">
              <div className="loginInfoContainer">
                <div className="inputLogin">
                  <i class="fas fa-user-circle fa-lg"></i>
                  <input
                    className="id"
                    type="text"
                    placeholder="아이디"
                    onChange={this.handleInput}
                    name="idValue"
                  />
                </div>
                <div className="inputLogin">
                  <i class="fas fa-lock fa-lg"></i>
                  <input
                    className="pw"
                    type="password"
                    placeholder="비밀번호"
                    onchange={this.handleInput}
                    name="pwValue"
                  />
                </div>
                <div className="saveIdBox">
                  <input type="checkbox" id="saveId" />
                  <label for="saveId">아이디저장</label>
                </div>
                <button
                  onClick={this.handleSubmit}
                  className="loginButton"
                  type="submit"
                >
                  로그인
                </button>
                <div className="loginMenu">
                  <Link to="/Login-signup">
                    <button className="signUp">회원가입</button>
                  </Link>
                  <button className="findId">아이디 찾기</button>
                  <button className="findPw">비밀번호 찾기</button>
                </div>
              </div>
              <a href="#/" className="naverLoginBox">
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
