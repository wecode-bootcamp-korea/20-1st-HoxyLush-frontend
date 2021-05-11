import React, { Component } from 'react';
import Buttons from '../Buttons/Buttons';
import Category from '../Category/Category';
import OrderInfo from '../OrderInfo/OrderInfo';

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
