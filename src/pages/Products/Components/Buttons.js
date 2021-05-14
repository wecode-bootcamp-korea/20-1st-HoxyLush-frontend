import React, { Component } from 'react';
import './Buttons.scss';

export default class Buttons extends Component {
  render() {
    const { leftBtn, rightBtn, leftLabel, rightLabel, closeModalAlert } =
      this.props;
    return (
      <div className="btns">
        <button className="btn leftBtn" id={leftLabel}>
          {leftBtn}
        </button>
        <button
          className="btn rightBtn"
          id={rightLabel}
          onClick={closeModalAlert}
        >
          {rightBtn}
        </button>
      </div>
    );
  }
}
