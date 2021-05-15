import React, { Component } from 'react';
import './ButtonsTest.scss';

export default class ButtonsTest extends Component {
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
