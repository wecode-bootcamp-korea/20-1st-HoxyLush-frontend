import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './Main.scss';
import PRODATA from './mainproductdata';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { topBannerImageId: 1, currentSlide: 0 };
  }

  componentDidMount() {
    const test = () => {
      if (this.state.topBannerImageId === 4) {
        this.setState({
          topBannerImageId: 1,
        });
      } else {
        this.setState({
          topBannerImageId: this.state.topBannerImageId + 1,
        });
      }
    };
    setInterval(test, 4000);
  }

  goToBannerImage = id => {
    this.setState({ topBannerImageId: id });
  };

  nextSlide = () => {
    if (this.state.currentSlide >= PRODATA.length / 3 - 1) {
      this.setState({ currentSlide: this.state.currentSlide + 1 });
      setTimeout(() => {
        this.setState({ currentSlide: 0 });
      }, 501);
    } else {
      this.setState({ currentSlide: this.state.currentSlide + 1 });
    }
  };
  prevSlide = () => {
    if (this.state.currentSlide === 0) {
      this.setState({ currentSlide: -1 });
      setTimeout(() => {
        this.setState({ currentSlide: PRODATA.length / 3 - 1 });
      }, 501);
    } else {
      this.setState({ currentSlide: this.state.currentSlide - 1 });
    }
  };

  isMovedSlide = () => {
    if (this.state.currentSlide === 0) {
      return {
        transform: `translateX(-300%)`,
        // transition: "all 0.5s ease-in-out",
      };
    } else if (this.state.currentSlide === -1) {
      return {
        transform: `translateX(0%)`,
        transition: 'all 0.5s ease-in-out',
      };
    } else if (this.state.currentSlide >= PRODATA.length / 3 - 1) {
      return {
        transform: `translateX(-${this.state.currentSlide * 3 + 3}00%)`,
        // transition: "all 0.5s ease-in-out",
      };
    } else {
      return {
        transform: `translateX(-${this.state.currentSlide * 3 + 3}00%)`,
        transition: 'all 0.5s ease-in-out',
      };
    }
  };

  render() {
    const topBannerImageIdList = [1, 2, 3, 4];
    const { topBannerImageId } = this.state;
    return (
      <div className="mainContainer">
        <Nav />
        <section className="mainBanner">
          <img
            className="topBannerImage"
            src={`/images/mainImage_${topBannerImageId}.jpeg`}
          />
          <ul className="topBannerimageButtonList">
            {topBannerImageIdList.map((imageId, index) => {
              return (
                <li
                  key={index}
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
        <section className="recommendProduct">
          <div className="bigbigcont">
            <div className="bigcont">
              {PRODATA.slice(PRODATA.length - 3, PRODATA.length).map(data => {
                return (
                  <div className="cont" style={this.isMovedSlide()}>
                    <img src={data.url} />
                    <div>{data.description}</div>
                    <div>{data.price}</div>
                  </div>
                );
              })}
              {PRODATA.map(data => {
                return (
                  <div className="cont" style={this.isMovedSlide()}>
                    <img src={data.url} />
                    <div>{data.description}</div>
                    <div>{data.price}</div>
                  </div>
                );
              })}
              {PRODATA.slice(0, 3).map(data => {
                return (
                  <div className="cont" style={this.isMovedSlide()}>
                    <img src={data.url} />
                    <div>{data.description}</div>
                    <div>{data.price}</div>
                  </div>
                );
              })}
            </div>
            <button onClick={this.prevSlide}>Previous Slide</button>
            <button onClick={this.nextSlide}>Next Slide</button>
          </div>
        </section>
      </div>
    );
  }
}
