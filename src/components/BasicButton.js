import React, { Component } from 'react';
import './BasicButton.scss';

export default class BasicButton extends Component {
  render() {
    const { buttonInfo, buttonName } = this.props;
    return (
      <div className="basicButton">
        <button type="button" className={`btn ${buttonInfo}`}>
          {buttonName}
        </button>
      </div>
    );
  }
}
