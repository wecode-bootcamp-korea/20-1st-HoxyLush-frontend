import React, { Component } from 'react';
import DetailImages from './DetailImages/DetailImages';
import DetailInfo from './DetailInfo/DetailInfo';
import './DetailMain.scss';

export default class DetailMain extends Component {
  state = {
    item: [],
  };

  fetchItem = () => {
    fetch('/public/data/productList.json/')
      .then(res => res.json())
      .then(data =>
        this.setState({
          item: data,
        })
      );
  };

  render() {
    return (
      <section>
        <main>
          <DetailImages />
          <DetailInfo />
        </main>
      </section>
    );
  }
}
