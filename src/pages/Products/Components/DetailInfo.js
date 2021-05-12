import React, { Component } from 'react';
import Buttons from './Buttons';
import Category from './Category';
import OrderInfo from './OrderInfo';

export default class DetailInfo extends Component {
  render() {
    return (
      <div className="detailInfo">
        <Category />
        <OrderInfo />
        <Buttons />
      </div>
    );
  }
}
