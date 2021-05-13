import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { topBannerImageId: 1 };
  }

  componentDidMount() {
    const { topBannerImageId } = this.state;
    const test = () => {
      if (topBannerImageId === 4) {
        this.setState({
          topBannerImageId: 1,
        });
      } else {
        this.setState({
          topBannerImageId: topBannerImageId + 1,
        });
      }
    };
    setInterval(test, 4000);
  }

  goToBannerImage = id => {
    this.setState({ topBannerImageId: id });
  };

  render() {
    const topBannerImageIds = [1, 2, 3, 4];
    const { topBannerImageId } = this.state;
    return (
      <div>
        <Nav />
        <section className="mainBanner">
          <img
            className="topBannerImage"
            src={`/images/mainImage_${topBannerImageId}.jpeg`}
          />
          <ul className="topBannerimageButtonContainer">
            {topBannerImageIds.map(imageId => {
              return (
                <li
                  className={`topBannerimageButton ${
                    topBannerImageId === imageId && 'selectedBannerImageButton'
                  }`}
                  onClick={() => {
                    this.goToBannerImage(imageId);
                  }}
                />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
