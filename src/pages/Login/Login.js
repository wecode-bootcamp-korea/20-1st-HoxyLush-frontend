import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { API } from '../../config';
import Nav from '../../components/Nav';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, pw } = this.state;
    const checkSpace = /\s/;
    const checkSpecial = /[~!@#$%^&*()_+|<>?:;`,{}\]\[\/\'\"\.\₩\\\=\-]/;
    const checkKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const checkPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/;

    if (!id) {
      alert('아이디를 입력해주세요');
    } else if (
      id.search(checkSpace) !== -1 ||
      id.search(checkSpecial) !== -1 ||
      id.search(checkKorean) !== -1 ||
      id.length < 8
    ) {
      alert('잘못된 아이디 입니다.');
    } else if (!pw) {
      alert('패스워드를 입력해주세요');
    } else if (!checkPassword.test(pw) || pw.search(checkSpace) !== -1) {
      alert('잘못된 패스워드입니다.');
    } else {
      fetch(`${API}/users/login`, {
        method: 'POST',
        body: JSON.stringify({
          account: id,
          password: pw,
        }),
      })
        .then(res => res.json())
        .then(submitResult => {
          if (submitResult.MESSAGE === 'SUCCESS') {
            localStorage.setItem('ACCESS_TOKEN', submitResult.token);
            this.props.history.push('/');
          } else {
            alert('회원정보를 찾을 수 없습니다.');
          }
        });
    }
  };

  render() {
    const { id, pw } = this.state;
    const { handleInput, handleSubmit } = this;
    return (
      <div className="loginContainer">
        <div className="Title">
          <h1>로그인</h1>
        </div>
        <ul className="userType">
          <li className="member">회원</li>
          <li className="noMember">비회원</li>
        </ul>

        <div className="loginInfo">
          <div className="inputLoginInfo">
            <i class="fas fa-user-circle fa-lg"></i>
            <input
              className="id"
              type="text"
              placeholder="아이디"
              onChange={handleInput}
              name="id"
              value={id}
              pattern="/^[A-Za-z0-9+]*$/"
            />
          </div>
          <div className="inputLoginInfo">
            <i class="fas fa-lock fa-lg"></i>
            <input
              className="pw"
              type="text"
              placeholder="비밀번호"
              onChange={handleInput}
              name="pw"
              value={pw}
            />
          </div>
          <div className="saveIdBox">
            <label>
              <input type="checkbox" className="saveId" />
              <span className="styledCheckBox"></span>
            </label>
            아이디 저장
          </div>
          <button onClick={handleSubmit} className="loginButton" type="submit">
            로그인
          </button>
          <div className="loginMenu">
            <Link to="/signup">
              <button className="signUp">회원가입</button>
            </Link>
            <button className="findId">아이디 찾기</button>
            <button className="findPw">비밀번호 찾기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
