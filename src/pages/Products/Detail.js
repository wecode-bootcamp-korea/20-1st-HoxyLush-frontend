import React, { Component } from 'react';
import DetailImages from './Components/DetailImages';
import DetailInfo from './Components/DetailInfo';
// import DetailYoutube from './DetailBody/DetailYoutube/DetailYoutube';
import DetailNavi from './Components/DetailNavi';
import './Detail.scss';

export default class Detail extends Component {
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
        <article>
          <DetailNavi />
          {/* <DetailYoutube /> */}
        </article>
      </section>
    );
  }
}
