import React, { Component } from 'react';

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

  inputHandle = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { closeNavSearchModal } = this.props;
    const { navSearch, inputHandle } = this;

    return (
      <div className="navSearchModal">
        <button className="modalCloseButton" onClick={closeNavSearchModal}>
          <i class="fas fa-times"></i>
        </button>
        <form className="modalContainer" onSubmit={navSearch}>
          <input
            className="navSearchBackdrop"
            placeholder="더 풍성하게 돌아온 NEW 기프트"
            name="searchkeyword"
            onChange={inputHandle}
          />
          <button>
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(NavSearchModal);
