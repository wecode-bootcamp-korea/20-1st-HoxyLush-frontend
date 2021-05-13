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
    const firstCategory = categories.map(category => {
      return (
        <option key={category.id} value={category.category}>
          {category.category}
        </option>
      );
    });
    const secondCategory = categories.map(category => {
      return (
        <option key={category.id} value={category.category}>
          {category.category}
        </option>
      );
    });

    return (
      <div className="category">
        <span>홈</span>
        <i className="fas fa-chevron-right"></i>
        <select name="1" id="select">
          <option value="1" selected>
            러쉬
          </option>
          <option value="1">LUSH SPA</option>
        </select>
        <i className="fas fa-chevron-right"></i>
        <select id="select">{firstCategory}</select>
        <i className="fas fa-chevron-right"></i>
        <select id="select">{secondCategory}</select>
      </div>
    );
  }
}
