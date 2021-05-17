import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';
import './Main.scss';
import PRODATA from './mainproductdata';
import ASIDEDATA from './mainasideproductdata';

const topBannerImageIdList = [1, 2, 3, 4];
const recommendProductSliderIDList = [0, 1, 2, 3];

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      topBannerImageId: 1,
      currentSlide: 0,
      currentAsideSlide: 0,
      slidestatus: '',
    };
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

  goToRecommendProductSlide = id => {
    this.setState({ currentSlide: id });
  };

  nextSlide = () => {
    const { currentAsideSlide } = this.state;
    if (currentAsideSlide >= ASIDEDATA.length - 1) {
      this.setState({ currentAsideSlide: currentAsideSlide + 1 });
      setTimeout(() => {
        this.setState({ slidestatus: 'minus' });
      }, 501);
      setTimeout(() => {
        this.setState({ currentAsideSlide: 0 });
      }, 501);
      setTimeout(() => {
        this.setState({ slidestatus: '' });
      }, 540);
    } else {
      this.setState({ currentAsideSlide: currentAsideSlide + 1 });
    }
  };
  prevSlide = () => {
    const { currentAsideSlide } = this.state;
    if (currentAsideSlide === 0) {
      this.setState({ currentAsideSlide: -1 });
      setTimeout(() => {
        this.setState({ slidestatus: 'minus' });
      }, 101);
      setTimeout(() => {
        this.setState({ currentAsideSlide: ASIDEDATA.length - 1 });
      }, 501);
      setTimeout(() => {
        this.setState({ slidestatus: '' });
      }, 540);
    } else {
      this.setState({ currentAsideSlide: currentAsideSlide - 1 });
    }
  };

  isMovedSlide = () => {
    const { currentSlide } = this.state;
    if (currentSlide === 0) {
      return {
        transform: `translateX(-300%)`,
        transition: 'all 0.5s ease-in-out',
      };
    } else if (currentSlide === -1) {
      return {
        transform: `translateX(0%)`,
        transition: 'all 0.5s ease-in-out',
      };
    } else if (currentSlide >= PRODATA.length / 3 - 1) {
      return {
        transform: `translateX(-${currentSlide * 3 + 3}00%)`,
        transition: 'all 0.5s ease-in-out',
      };
    } else {
      return {
        transform: `translateX(-${currentSlide * 3 + 3}00%)`,
        transition: 'all 0.5s ease-in-out',
      };
    }
  };

  isMovedAsideSlide = () => {
    const { currentAsideSlide } = this.state;
    if (currentAsideSlide === 0) {
      return {
        transform: `translateX(-100%)`,
        transition: 'all 0.5s ease-in-out',
      };
    } else if (currentAsideSlide === -1) {
      return {
        transform: `translateX(0%)`,
        transition: 'all 0.5s ease-in-out',
      };
    } else {
      return {
        transform: `translateX(-${currentAsideSlide + 1}00%)`,
        transition: 'all 0.5s ease-in-out',
      };
    }
  };

  render() {
    const { topBannerImageId, currentSlide, slidestatus, currentAsideSlide } =
      this.state;
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
        <section className="mainPageProducts">
          <div className="recommendProductTitle">나만 알고 싶은 향기</div>
          <section className="recommendProducts">
            <div className="bigbigcont">
              <div className="recommendProductInfoContainer">
                {PRODATA.slice(PRODATA.length - 3, PRODATA.length).map(
                  recommendProductdata => {
                    return (
                      <div
                        className="recommendProductInfo"
                        style={this.isMovedSlide()}
                        key={recommendProductdata.id}
                      >
                        <img src={recommendProductdata.url} />
                        <div>{recommendProductdata.title}</div>
                        <div>{recommendProductdata.description}</div>
                        <div className="recommendProductPrice">
                          {`₩ ${recommendProductdata.price.toLocaleString()}`}
                        </div>
                      </div>
                    );
                  }
                )}
                {PRODATA.map(recommendProductdata => {
                  return (
                    <div
                      className="recommendProductInfo"
                      style={this.isMovedSlide()}
                      key={recommendProductdata.id}
                    >
                      <img src={recommendProductdata.url} />
                      <div>{recommendProductdata.title}</div>
                      <div>{recommendProductdata.description}</div>
                      <div className="recommendProductPrice">
                        {`₩ ${recommendProductdata.price.toLocaleString()}`}
                      </div>
                    </div>
                  );
                })}
                {PRODATA.slice(0, 3).map(recommendProductdata => {
                  return (
                    <div
                      className="recommendProductInfo"
                      style={this.isMovedSlide()}
                      key={recommendProductdata.id}
                    >
                      <img src={recommendProductdata.url} />
                      <div>{recommendProductdata.title}</div>
                      <div>{recommendProductdata.description}</div>
                      <div className="recommendProductPrice">
                        {`₩ ${recommendProductdata.price.toLocaleString()}`}
                      </div>
                    </div>
                  );
                })}
              </div>
              <ul className="recommendProductSliderButtonList">
                {recommendProductSliderIDList.map((sliderId, index) => {
                  return (
                    <li
                      key={index}
                      className={`recommendProductSliderButton ${
                        currentSlide === sliderId &&
                        'selectedRecommendProductSliderButton'
                      }`}
                      onClick={() => {
                        this.goToRecommendProductSlide(sliderId);
                      }}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
        </section>
        <section className="asideContainer">
          <div className="asides">
            {ASIDEDATA.slice(ASIDEDATA.length - 1, ASIDEDATA.length).map(
              asideProductdata => {
                return (
                  <img
                    alt="main page aside product"
                    key={asideProductdata.id}
                    className={`${slidestatus} asideProduct`}
                    style={this.isMovedAsideSlide()}
                    src={asideProductdata.url}
                  />
                );
              }
            )}
            {ASIDEDATA.map(asideProductdata => {
              return (
                <img
                  alt="main page aside product"
                  key={asideProductdata.id}
                  className={`${slidestatus} asideProduct`}
                  style={this.isMovedAsideSlide()}
                  src={asideProductdata.url}
                />
              );
            })}

            {ASIDEDATA.slice(0, 1).map(asideProductdata => {
              return (
                <img
                  alt="main page aside product"
                  key={asideProductdata.id}
                  className={`${this.state.slidestatus} asideProduct`}
                  style={this.isMovedAsideSlide()}
                  src={asideProductdata.url}
                />
              );
            })}
          </div>
          <div className="asideSlideButtons">
            <button onClick={this.prevSlide}>
              <span className="goToPrevAsideSlide">{'<'}</span>
            </button>
            <span className="currentAsideSlideNumber">
              {`${
                currentAsideSlide === -1
                  ? 7
                  : currentAsideSlide === 7
                  ? 1
                  : currentAsideSlide + 1
              } / ${ASIDEDATA.length}`}
            </span>
            <button onClick={this.nextSlide}>
              <span className="goToNextAsideSlide">{'>'}</span>
            </button>
          </div>
        </section>
      </div>
    );
  }
}
