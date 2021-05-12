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
      .then(data => this.setState({ categories: data }));
  }

  render() {
    const { categories } = this.state;
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
        <select id="select">
          {categories.map(category => {
            return (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </select>
        <i className="fas fa-chevron-right"></i>
        <select id="select">
          {categories.map(category => {
            return (
              <option key={category.id} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
