import React, { Component } from 'react';
import Nav from '../../components/Nav';
import { API } from '../../config';
import './Signup.scss';

const EMAIL_LIST = [
  'naver.com',
  'hanmail.net ',
  'daum.net ',
  'nate.com ',
  'hotmail.com ',
  'gmail.com',
  'icloud.com',
];

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      idValid: '',
      idValidMessage: '',
      pw: '',
      pwValid: '',
      pwValidMessage: '',
      pwCheck: '',
      pwCheckValid: '',
      pwCheckValidMessage: '',
      userName: '',
      userNickName: '',
      userEmail: '',
      userEmailValid: '',
      userEmailValidMessage: '',
      userPhoneNumber: '',
      mainAddress: '',
      primaryAddress: '',
      detailAddress: '',
    };
  }

  inputValueChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  idValidCheck = e => {
    const { id } = this.state;
    const checkSpace = /\s/;
    const checkSpecial = /[~!@#$%^&*()_+|<>?:;`,{}\]\[\/\'\"\.\₩\\\=\-]/;
    const checkKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

    if (id == '') {
      this.setState({ idValid: '', idValidMessage: '' });
    } else if (
      id.search(checkSpace) === -1 &&
      id.search(checkSpecial) === -1 &&
      id.search(checkKorean) === -1 &&
      id.length > 7
    ) {
      this.setState({
        idValid: true,
        idValidMessage: '사용 가능한 아이디 입니다.',
      });
    } else {
      this.setState({
        idValid: false,
        idValidMessage: `사용 불가능한 아이디 입니다. (8자 이상, 공백,특수문자,한글 사용 불가)`,
      });
    }
  };

  pwValidCheck = e => {
    const { pw } = this.state;
    const checkSpace = /\s/;
    const checkPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/;

    if (pw == '') {
      this.setState({ pwValid: '', pwValidMessage: '' });
    } else if (checkPassword.test(pw) && pw.search(checkSpace) === -1) {
      this.setState({
        pwValid: true,
        pwValidMessage: '안전한 비밀번호 입니다.',
      });
    } else {
      this.setState({
        pwValid: false,
        pwValidMessage:
          '비밀번호는 영문 소문자, 숫자를 모두 포함해야 합니다.(공백 사용 불가)',
      });
    }
  };

  emailValidCheck = e => {
    const { userEmail } = this.state;
    const regExp = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9.]+$/;

    if (regExp.test(userEmail) || userEmail == '') {
      this.setState({
        userEmailValid: '',
        userEmailValidMessage: '',
      });
    } else {
      this.setState({
        userEmailValid: false,
        userEmailValidMessage: '이메일 형식이 올바르지 않습니다.',
      });
    }
  };

  pwCheckValidCheck = e => {
    const { pw, pwCheck } = this.state;

    if (pwCheck == '' || pw === pwCheck) {
      this.setState({ pwCheckValid: '', pwCheckValidMessage: '' });
    } else if (pw !== pwCheck) {
      this.setState({
        pwCheckValid: false,
        pwCheckValidMessage: '비밀번호가 서로 다릅니다.',
      });
    }
  };

  validReset = e => {
    const { id } = e.target;
    const valid = id + 'Valid';
    const validMessage = id + 'ValidMessage';
    this.setState({ [valid]: '', [validMessage]: '' });
  };

  // 회원가입 완료 버튼시 이벤트 함수
  signUpSubmit = e => {
    e.preventDefault();
    const {
      id,
      pw,
      pwCheck,
      userName,
      userEmail,
      userPhoneNumber,
      userNickName,
      mainAddress,
      primaryAddress,
      detailAddress,
    } = this.state;

    if (
      id !== '' &&
      pw !== '' &&
      pwCheck !== '' &&
      userEmail !== '' &&
      userPhoneNumber !== ''
    ) {
      fetch(`${API}/users/signup`, {
        method: 'POST',
        body: JSON.stringify({
          account: id,
          password: pw,
          email: userEmail,
          phone_number: userPhoneNumber,
          nickname: userNickName,
          address: mainAddress + primaryAddress + detailAddress,
        }),
      })
        .then(response => response.json())
        .then(submitresult => {
          if (submitresult.MESSAGE == 'SUCCESS') {
            alert('회원가입이 성공적으로 되었습니다.');
            this.props.history.push('/login');
          } else {
            alert('회원가입이 실패했습니다.');
          }
        });
    } else {
      alert('필수입력항목을 모두 입력해주시기 바랍니다.');
    }
  };

  render() {
    const {
      inputValueChange,
      idValidCheck,
      pwValidCheck,
      pwCheckValidCheck,
      validReset,
      signUpSubmit,
      emailValidCheck,
    } = this;
    const {
      id,
      idValid,
      idValidMessage,
      pw,
      pwValid,
      pwValidMessage,
      pwCheck,
      pwCheckValid,
      pwCheckValidMessage,
      userName,
      userNickName,
      userEmail,
      userEmailValid,
      userEmailValidMessage,
      userPhoneNumber,
      mainAddress,
      primaryAddress,
      detailAddress,
    } = this.state;
    return (
      <>
        <Nav />
        <div className="LoginsignupContainer">
          <div className="content">
            <div className="signUpTitle">
              <h2>JOIN US</h2>
              <div className="subTitle">
                <span className="currentPhase">정보입력</span>&nbsp;&nbsp;
                <span>{'>'}</span>&nbsp;&nbsp;
                <span>가입완료</span>
              </div>
            </div>
            <div className="userInfoInputTitle">
              <h3>기본정보</h3>
              <span>
                <i className="fas fa-square"></i>표시는 반드시 입력하셔야 하는
                항목입니다.
              </span>
            </div>
            <div className="userInfoInputHere">
              <div className="inputContainer">
                <i className="fas fa-square"></i>
                <label htmlFor="idInputHere">아이디</label>
                <input
                  className="inputField"
                  id="id"
                  onChange={inputValueChange}
                  value={id}
                  onBlur={idValidCheck}
                  onFocus={validReset}
                />
              </div>
              <div className="errorMessage">{!idValid && idValidMessage}</div>
              <div className="solveError">{idValid && idValidMessage}</div>
              <div className="inputContainer">
                <i className="fas fa-square"></i>
                <label htmlFor="pwInputHere">비밀번호</label>
                <input
                  className="inputField"
                  id="pw"
                  type="password"
                  onChange={inputValueChange}
                  value={pw}
                  onBlur={pwValidCheck}
                  onFocus={validReset}
                />
              </div>
              <div className="errorMessage">{!pwValid && pwValidMessage}</div>
              <div className="solveError">{pwValid && pwValidMessage}</div>
              <div className="inputContainer">
                <i className="fas fa-square"></i>
                <label htmlFor="pwCheckInputHere">비밀번호 확인</label>
                <input
                  className="inputField"
                  id="pwCheck"
                  type="password"
                  onChange={inputValueChange}
                  value={pwCheck}
                  onBlur={pwCheckValidCheck}
                  onFocus={validReset}
                />
              </div>
              <div className="errorMessage">
                {!pwCheckValid && pwCheckValidMessage}
              </div>
              <div className="inputContainer">
                <i className="fas fa-square"></i>
                <label htmlFor="nameInputHere">이름</label>
                <input
                  className="inputField"
                  id="userName"
                  onChange={inputValueChange}
                  value={userName}
                />
              </div>
              <div className="inputContainer">
                <label htmlFor="nicknameInputHere">닉네임</label>
                <input
                  className="inputField"
                  id="userNickName"
                  onChange={inputValueChange}
                  value={userNickName}
                />
              </div>
              <div className="inputContainer">
                <i className="fas fa-square"></i>
                <label htmlFor="emailInputHere">이메일</label>
                <input
                  className="inputField"
                  id="userEmail"
                  onChange={inputValueChange}
                  value={userEmail}
                  onBlur={emailValidCheck}
                  onFocus={validReset}
                />
                <select className="chooseEmail">
                  <option>직접입력</option>
                  {EMAIL_LIST.map(data => {
                    return <option>{data}</option>;
                  })}
                  <i className="fas fa-chevron-down"></i>
                </select>
                <div className="formCheckBox">
                  <input className="phoneCheckBox" type="checkbox"></input>
                  <label className="advertisementReceiveCheck">
                    정보/이벤트 메일 수신에 동의합니다.
                  </label>
                </div>
              </div>
              <div className="errorMessage">
                {!userEmailValid && userEmailValidMessage}
              </div>

              <div className="inputContainer">
                <i className="fas fa-square"></i>
                <label htmlFor="phoneNumberInputHere">휴대폰번호</label>
                <input
                  className="inputField"
                  id="userPhoneNumber"
                  onChange={inputValueChange}
                  value={userPhoneNumber}
                />
                <div className="formCheckBox">
                  <input className="phoneCheckBox" type="checkbox"></input>
                  <label className="advertisementReceiveCheck">
                    정보/이벤트 SMS 수신에 동의합니다.
                  </label>
                </div>
              </div>
              <div className="inputContainer">
                <label htmlFor="addressInputHere">주소</label>
                <input
                  className="inputField"
                  id="mainAddress"
                  onChange={inputValueChange}
                  value={mainAddress}
                />
                <button>우편번호검색</button>
              </div>
              <div className="inputContainer">
                <input
                  className="inputField"
                  id="primaryAddress"
                  onChange={inputValueChange}
                  value={primaryAddress}
                />
                <input
                  className="inputField"
                  id="detailAddress"
                  onChange={inputValueChange}
                  value={detailAddress}
                />
              </div>
            </div>

            <div className="signUpButton">
              <button onClick={signUpSubmit}>회원가입</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
