import React, { Component } from 'react';
import './Category.scss';

export default class Category extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    const url = '/data/category.json';
    fetch(url)
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
  }

  render() {
    const { categories } = this.state;
    const mainCategory = categories.map(({ category, id }) => {
      return (
        <option key={id} value={category}>
          {category}
        </option>
      );
    });

    const subCategory = categories.map(({ category, id }) => {
      return (
        <option key={id} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div className="category">
        <span>홈</span>
        <i className="fas fa-chevron-right"></i>
        <select className="select">
          <option selected>러쉬</option>
          <option>LUSH SPA</option>
        </select>
        <i className="fas fa-chevron-right"></i>
        <select className="select">{mainCategory}</select>
        <i className="fas fa-chevron-right"></i>
        <select className="select">{subCategory}</select>
      </div>
    );
  }
}
