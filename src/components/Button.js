import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
  render() {
    const { info, name, handleLoadMoreBtn } = this.props;
    return (
      <div className="basicButton">
        <button
          type="button"
          className={`btn ${info}`}
          onClick={handleLoadMoreBtn}
        >
          {name}
        </button>
      </div>
    );
  }
}
