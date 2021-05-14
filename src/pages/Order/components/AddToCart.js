import React, { Component } from 'react';
import Modal from '../../Products/Components/';

export default class AddToCart extends Component {
  render() {
    return (
      <Modal>
        <h1>장바구니 담기</h1>
        <section>
          <img alt="러쉬" src="" />
          <div>
            <div>더티</div>
            <div>#배쓰밤 #고운바닷소금가득</div>
            <div className="orderNumberForm">
              <form>
                <button onClick={this.handleDecreaseCount}>
                  <i className="fas fa-minus"></i>
                </button>
                <input type="text" value="값넣기" />
                <button onClick={this.handleIncreaseCount}>
                  <i className="fas fa-plus"></i>
                </button>
              </form>
              <span className="sum">₩'얼마'</span>
            </div>
          </div>
        </section>
      </Modal>
    );
  }
}
