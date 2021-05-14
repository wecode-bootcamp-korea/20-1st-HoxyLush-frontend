import React, { Component } from 'react';
import './Signup.scss';

const TABLE_TOP = {
  data: [
    { name: '아이디', type: 'text', text: 'idValue' },
    { name: '비밀번호', type: 'password', text: 'pwValue' },
    { name: '비밀번호 확인', type: 'password', text: 'pwCheckValue' },
    { name: '이름', type: 'text', text: 'nameValue' },
    { name: '닉네임', type: 'text', text: 'nicknameValue' },
  ],
};

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
      idValue: '',
      pwValue: '',
      pwCheckValue: '',
      nameValue: '',
      nickNameValue: '',
      emailValue: '',
      phoneNumberValue: '',
      adressValue: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkidValid = e => {
    const {
      idValue,
      // pwValue,
      // pwCheckValue,
      // nameValue,
      // nickNameValue,
      // emailValue,
      // phoneNumberValue,
    } = this.state;
    const delSpecialSymbol = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>\#$%&\\\=\(\'\"]/gi;

    console.log(delSpecialSymbol.test(idValue));
    console.log(e.key);
    if (delSpecialSymbol.test(idValue)) {
      idValue.replace(delSpecialSymbol, '');
    }
    if (idValue.indexOf('@') > 2) {
      alert('아이디는');
    }
  };

  render() {
    return (
      <div className="LoginsignupContainer">
        <div className="content">
          <div className="topBox">
            <h2>JOIN US</h2>
            <div>
              <span>정보입력</span>&nbsp;&nbsp;
              <span>></span>&nbsp;&nbsp;
              <span>가입완료</span>
            </div>
          </div>
          <div className="title">
            <h3>기본정보</h3>
            <span>
              <i class="fas fa-square"></i>표시는 반드시 입력하셔야 하는
              항목입니다.
            </span>
          </div>
          <div className="tableBox">
            {TABLE_TOP.data.map(data => {
              return (
                <tr>
                  <th>
                    <i class="fas fa-square"></i>
                    {data.name}
                  </th>
                  <td>
                    <div className="textField">
                      <input
                        className="topTalbe"
                        type={data.type}
                        name={data.text}
                        onChange={this.handleInput}
                      ></input>
                    </div>
                  </td>
                </tr>
              );
            })}

            <tr>
              <th>
                <i class="fas fa-square"></i>이메일
              </th>
              <td>
                <div className="textFieldEmail">
                  <input
                    className="email"
                    type="text"
                    name="emailValue"
                    onChange={this.handleInput}
                  ></input>
                </div>
                <select className="chooseEmail">
                  <option>직접입력</option>
                  {EMAIL_LIST.map(data => {
                    return <option>{data}</option>;
                  })}
                  <i class="fas fa-chevron-down"></i>
                </select>
                <div className="formCheckBox">
                  <input className="phoneCheckBox" type="checkbox"></input>
                  <label>정보/이벤트 메일 수신에 동의합니다.</label>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <i class="fas fa-square"></i>휴대폰번호
              </th>
              <td>
                <div className="textFieldPhoneNumber">
                  <input
                    className="phoneNumber"
                    type="text"
                    placeholder="-없이 입력하세요."
                    name="phoneNumberValue"
                    onChange={this.handleInput}
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
                &nbsp;
                <div className="textFieldAdressBottom">
                  <input
                    className="adress"
                    type="text"
                    name="adressValue"
                    onChange={this.handleInput}
                  ></input>
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

export default Signup;
