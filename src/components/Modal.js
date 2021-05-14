import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

export default class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div class="modal">
        <div className="modalBackdrop"></div>
        <div className="modalBox">
          <div>{children}</div>
        </div>
      </div>,
      modalRoot
    );
  }
}

const modalRoot = document.querySelector('#modalRoot');
