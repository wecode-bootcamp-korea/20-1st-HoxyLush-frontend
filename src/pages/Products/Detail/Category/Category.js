import React, { Component } from 'react';
import './Category.scss';

export default class Category extends Component {
  render() {
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
          <option value="1">A</option>
          <option value="1">B</option>
          <option value="1" selected>
            C
          </option>
          <option value="1">D</option>
        </select>
        <i class="fas fa-chevron-right"></i>
        <select name="2" id="select">
          <option value="1">A</option>
          <option value="1">B</option>
          <option value="1" selected>
            C
          </option>
          <option value="1">D</option>
        </select>
      </div>
    );
  }
}
