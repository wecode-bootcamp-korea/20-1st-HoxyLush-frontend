import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { withRouter } from 'react-router-dom';

import './NavSearchModal.scss';

class NavSearchModal extends Component {
  constructor() {
    super();
    this.state = {
      searchkeyword: '',
    };
  }

  navSearch = e => {
    e.preventDefault();
    this.props.history.push(`/search?keyword=${this.state.searchkeyword}`);
  };

  inputHanddle = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <div
        className={this.props.closeStatus ? 'navSearchModal' : 'navModalClose'}
      >
        <button
          className="modalCloseButton"
          onClick={this.props.closeNavSearchModal}
        >
          <i class="fas fa-times"></i>
        </button>
        <form className="modalContainer" onSubmit={this.navSearch}>
          <input
            className="modalBackdrop"
            placeholder="더 풍성하게 돌아온 NEW 기프트"
            name="searchkeyword"
            onChange={this.inputHanddle}
          />
          <button>
            <i className="fas fa-search" />
          </button>
        </form>
        <ul className="modalBox">
          <div>{children}</div>
        </ul>
      </div>,
      modalRoot
    );
  }
}

const modalRoot = document.querySelector('#modalRoot');
export default withRouter(NavSearchModal);
