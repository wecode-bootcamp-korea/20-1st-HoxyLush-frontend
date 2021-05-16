import React, { Component } from 'react';

export default class Review extends Component {
  rateStars = () => {
    const { review } = this.props;
    const star = [];
    for (let x = 0; x < review.rating; x++) {
      star.push(<i className="fas fa-star" />);
    }
    return star;
  };

  render() {
    const { review } = this.props;

    return (
      <li className="reviewWrapper">
        <div className="reviewLeft">
          <span className="stars">{this.rateStars()}</span>
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
