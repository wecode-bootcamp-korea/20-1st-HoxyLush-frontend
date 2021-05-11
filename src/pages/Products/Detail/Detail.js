import React, { Component } from 'react';
import DetailImages from './DetailImages/DetailImages';
import DetailInfo from './DetailInfo/DetailInfo';
import './Detail.scss';

export default class Detail extends Component {
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
