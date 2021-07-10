import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDeals.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';
import HotDealsCarousel from '../../common/HotDealsCarousel/HotDealsCarousel';
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';

class HotDeals extends React.Component {
  state = {
    activeCarousel: 0,
    activeSlider: 0,
    fadeLeft: true,
    fadeRight: true,
  };

  componentDidMount() {
    this.carousel();
  }

  carousel = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        prevProduct: prevState.activeCarousel,
        activeCarousel:
          prevState.activeCarousel === this.props.products.length - 1
            ? 0
            : ++prevState.activeCarousel,
      }));
    }, 3000);
  };

  stopCarousel = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleProductChange(event, newPage) {
    event.preventDefault();
    this.stopCarousel();
    this.timeoutId = setTimeout(() => {
      this.carousel();
      clearTimeout(this.timeoutId);
    }, 10000);
    setTimeout(() => {
      this.setState({ activeCarousel: newPage });
    }, 1000);
  }

  handleSliderChange(event, value) {
    event.preventDefault();
    setTimeout(() => {
      if (this.state.activeSlider === 0 && value === -1) {
        this.setState({ activeSlider: 2 });
      } else if (this.state.activeSlider === 2 && value === 1) {
        this.setState({ activeSlider: 0 });
      } else if (value === 1) {
        this.setState({ activeSlider: this.state.activeSlider + 1 });
      } else if (value === -1) {
        this.setState({ activeSlider: this.state.activeSlider - 1 });
      }
    }, 1000);
  }

  makeFadeOut(event, newArgument) {
    event.preventDefault();
    this.setState({ fadeLeft: false, fadeRight: false });
    if (newArgument >= 0) {
      setTimeout(() => {
        this.makeFadeIn(newArgument);
      }, 1000);
    } else {
      setTimeout(() => {
        this.makeFadeIn(newArgument);
      }, 1000);
    }
  }

  makeFadeIn() {
    this.setState({ fadeLeft: false, fadeRight: false });
  }

  render() {
    const { products, hotdeals_slider } = this.props;
    const { activeCarousel, activeSlider, fadeLeft, fadeRight } = this.state;

    const dots = [];

    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={dots}>
          <a
            href='/#'
            onClick={event => {
              this.handleProductChange(event, i);
            }}
            className={i === activeCarousel ? styles.active : ''}
          >
            {}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={`col-xl-4 col-lg-4 col-md-5 col-sm-4 ${styles.box}`}>
              <div className={styles.heading}>
                <h3>HOT DEALS</h3>
                <div className={styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              {products.slice(activeCarousel, activeCarousel + 1).map(item => (
                <div
                  key={item.id}
                  className={fadeLeft ? styles.fadeIn : styles.fadeOut}
                >
                  <HotDealsBox {...item} />
                </div>
              ))}
            </div>
            <div
              className={`col-xl-8 col-lg-8 col-md-7 col-sm-8 col-12 ${styles.carouselBox}`}
            >
              {hotdeals_slider.slice(activeSlider, activeSlider + 1).map(item => (
                <div
                  key={item.id}
                  className={fadeRight ? styles.fadeInRight : styles.fadeOutRight}
                >
                  <HotDealsCarousel {...item} />
                  <div className={styles.arrows}>
                    <Button
                      variant='main-carousel'
                      onClick={event => {
                        this.handleSliderChange(event, -1);
                      }}
                    >
                      <FontAwesomeIcon icon={faLongArrowAltLeft}></FontAwesomeIcon>
                    </Button>
                    <Button
                      variant='main-carousel'
                      onClick={event => {
                        this.handleSliderChange(event, 1);
                      }}
                    >
                      <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HotDeals.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  hotdeals_slider: PropTypes.array,
};

HotDeals.defaultProps = {
  products: [],
  hotdeals_slider: [],
};

export default HotDeals;
