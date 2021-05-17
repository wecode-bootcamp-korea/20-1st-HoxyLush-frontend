import React, { Component } from 'react';
import './Buttons.scss';

export default class Buttons extends Component {
  render() {
    const {
      leftBtn,
      rightBtn,
      leftLabel,
      rightLabel,
      closeModalAlert,
      btnTypeButton,
      btnTypeSubmit,
    } = this.props;
    return (
      <div className="btns">
        <button type={btnTypeButton} className="btn leftBtn" id={leftLabel}>
          {leftBtn}
        </button>
        <button
          type={btnTypeSubmit}
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
