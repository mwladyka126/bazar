import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import Compare from '../Compare/Compare';
import Swipeable from '../../common/Swipeable/Swipeable';
import QuickView from '../QuickView/QuickView';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fadeTrue: true,
  };

  static defaultProps = {
    showCategories: true,
  };

  makeFadeOut(event, newArgument) {
    event.preventDefault();
    this.setState({ fadeTrue: false });
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

  makeFadeIn(newArgument) {
    this.setState({ fadeTrue: true });
    if (newArgument >= 0) {
      this.setState({ activePage: newArgument });
    } else {
      this.setState({ activeCategory: newArgument });
    }
  }

  changePage = (activePage, change) => {
    if (change === 1) {
      return this.setState({
        activePage: activePage + 1,
      });
    } else if (change === -1) {
      return this.setState({
        activePage: activePage - 1,
      });
    }
  };

  render() {
    const {
      showCategories,
      categories,
      products,
      getCompared,
      changeCompare,
      currentRwdMode,
      getViewOn,
      changeQuickView,
    } = this.props;
    const { activeCategory, activePage, fadeTrue } = this.state;
    const categoryProducts = showCategories
      ? products.filter(item => item.category === activeCategory)
      : products;
    let countPerPage = 8;
    if (currentRwdMode === 'tablet') {
      countPerPage = 3;
    } else if (currentRwdMode === 'mobile') {
      countPerPage = 2;
    } else {
      countPerPage = 8;
    }

    const pagesCount = Math.ceil(categoryProducts.length / countPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={event => this.makeFadeOut(event, i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col-12 col-sm-8 ' + styles.menu}>
                <ul>
                  {showCategories &&
                    categories.map(item => (
                      <li key={item.id}>
                        <a
                          href='/#'
                          className={
                            item.id === activeCategory ? styles.active : undefined
                          }
                          onClick={event => this.makeFadeOut(event, item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className={'col-12 col-md-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable
            activePage={this.state.activePage}
            changePage={(currentPage, change) => {
              if (change === 1) {
                return this.setState({
                  activePage:
                    currentPage === dots.length - 1 ? currentPage : currentPage + 1,
                });
              } else if (change === -1) {
                return this.setState({
                  activePage: currentPage === 0 ? currentPage : currentPage - 1,
                });
              }
            }}
          >
            <div className={'row ' + styles.swiper}>
              {categoryProducts
                .slice(activePage * countPerPage, (activePage + 1) * countPerPage)
                .map(item => (
                  <div
                    key={item.id}
                    className={`col-6 col-md-4 col-lg-3 p-2 ${
                      fadeTrue ? styles.fadeIn : styles.fadeOut
                    }`}
                  >
                    <ProductBox
                      getCompared={getCompared}
                      changeCompare={changeCompare}
                      getViewOn={getViewOn}
                      changeQuickView={changeQuickView}
                      {...item}
                    />
                  </div>
                ))}
            </div>
          </Swipeable>
        </div>
        <Compare getCompared={getCompared} changeCompare={changeCompare} />
        <QuickView getViewOn={getViewOn} changeQuickView={changeQuickView} />
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
  getViewOn: PropTypes.array,
  changeQuickView: PropTypes.func,
  showCategories: PropTypes.bool,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favourite: PropTypes.bool,
    })
  ),
  currentRwdMode: PropTypes.string,
  itemsPerSlide: PropTypes.number,
};

NewFurniture.defaultProps = {
  showCategories: {},
  categories: [],
  products: [],
};

export default NewFurniture;
