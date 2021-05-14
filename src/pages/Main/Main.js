import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './Main.scss';

export default class Main extends Component {
  constructor() {
    super();
    this.state = { topBannerImageId: 1 };
  }

  

function Carousel() {
    firstval += 2;
    parent = document.getElementById('container-carousel');
    parent.style.left = "-" + firstval + "px";
    if (!(firstval % 150)) {
        setTimeout(Carousel, 3000);
        firstval = 0;
        var firstChild = parent.firstElementChild;
        parent.appendChild(firstChild);
        parent.style.left= 0;
        return;
    }
    runCarousel = setTimeout(Carousel, 10);
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

  render() {
    const topBannerImageIdList = [1, 2, 3, 4];
    const { topBannerImageId } = this.state;
    return (
      <div>
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
        <section className="test">
        
        </section>
      </div>
    );
  }
}
