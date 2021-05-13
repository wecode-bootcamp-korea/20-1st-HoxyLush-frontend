import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

export default class Modal extends Component {
  render() {
    return createPortal(
      <div class="modal">
        <div onClick={this.props.onClose} className="modalBackdrop"></div>
        <div className="modalBox">
          <i className="fas fa-times" onClick={this.props.onClose}></i>
          <div>{this.props.children}</div>
        </div>
      </div>,
      modalRoot
    );
  }
}

const modalRoot = document.querySelector('#modalRoot');
