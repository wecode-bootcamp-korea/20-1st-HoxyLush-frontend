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
    console.log(categories);
    return (
      <div className="category">
        <span>홈</span>
        <i class="fas fa-chevron-right"></i>
        <select name="1" id="select">
          <option value="1" selected>
            러쉬
          </option>
          <option value="1">LUSH SPA</option>
        </select>
        <i class="fas fa-chevron-right"></i>
        <select name="1" id="select">
          {categories.map(category => {
            return <option>{category.category}</option>;
          })}
        </select>
        <i class="fas fa-chevron-right"></i>
        <select name="2" id="select">
          {categories.map(category => {
            return <option>{category.category}</option>;
          })}
        </select>
      </div>
    );
  }
}
