import React, { Component } from 'react';
import DetailImages from './DetailImages';
import DetailInfo from './DetailInfo';
import DetailMiddle from './DetailMiddle';
import './Detail.scss';

export default class Detail extends Component {
  render() {
    return (
      <section className="detail">
        <main className="detailUpperMain">
          <DetailImages />
          <DetailInfo />
        </main>
        <article className="detailLowerMain">
          <DetailMiddle />
        </article>
      </section>
    );
  }
}
