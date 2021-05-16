import React, { Component } from 'react';

export default class Review extends Component {
  render() {
    const { review, rateStars } = this.props;

    return (
      <li className="reviewWrapper">
        <div className="reviewLeft">
          <span className="stars">{rateStars()}</span>
          <span className="reveiwedDate">{review.date}</span>
          <span className="reveiwFrom">{review.buyFrom}</span>
        </div>
        <div className="reviewRight">
          <div className="reveiwContent">{review.review_content}</div>
        </div>
      </li>
    );
  }
}
