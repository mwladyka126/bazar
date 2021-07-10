import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './GallerySlider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faExchangeAlt,
  faShoppingBasket,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import ProductRating from '../ProductRating/ProductRatingContainer';

const GallerySlider = props => {
  const { gallery, products, starRating } = props;

  const defaultImage =
    'https://cdn.pixabay.com/photo/2018/01/20/09/42/sofa-3094153_960_720.jpg';

  const defaultCategory = gallery.find(category => category.name === 'Top seller').id;
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const categoryProducts = products.filter(item => item.subcategory === activeCategory);
  const defaultProduct = products.find(product => product.id === categoryProducts[0].id)
    .id;

  const [activeProduct, setActiveProduct] = useState(defaultProduct);

  const [slideNumber, setSlideNumber] = useState(0);
  const [fadeTrue, setFade] = useState(true);

  // change category in the tab-panel (with fade-effect)
  const handleCategoryChange = (event, newCategory) => {
    event.preventDefault();
    setFade(false);

    setTimeout(() => {
      makeFadeIn(newCategory);
    }, 500);

    let array = [];
    products.forEach(function(element) {
      if (element.subcategory === newCategory) {
        return array.push(element);
      }
    });
    setTimeout(() => {
      setActiveProduct(array[0].id);
    }, 500);
  };

  const makeFadeIn = newCategory => {
    setFade(true);
    setActiveCategory(newCategory);
  };

  //change product after click in the slider with miniatures
  const handleProductChange = productId => {
    setActiveProduct(productId);
  };

  // media query for amount of miniatures in the slider
  const mobileView = window.matchMedia('(min-width: 480px)');
  mobileView.addEventListener('change', widthChange);
  widthChange(mobileView);

  function widthChange(mobileView) {
    let tabCount = mobileView.matches ? 5 : 3;
    // console.log('tabCount', tabCount);
    return tabCount;
  }

  const [windowWidth, setWindowWidth] = useState(0);
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  // arrow left in the slider
  const handleSlideLeft = event => {
    event.preventDefault();
    let newSlideNumber = slideNumber - widthChange(mobileView);
    if (newSlideNumber >= 0) {
      setSlideNumber(newSlideNumber);
    } else {
      setSlideNumber(slideNumber);
    }
  };

  // arrow right in the slider
  const handleSlideRight = event => {
    event.preventDefault();
    let newSlideNumber = slideNumber + widthChange(mobileView);
    if (newSlideNumber >= categoryProducts.length) {
      setSlideNumber(slideNumber);
    } else {
      setSlideNumber(newSlideNumber);
    }
  };

  return (
    <div className={styles.root + ' ' + windowWidth}>
      <div className={styles.heading}>
        <h3>Furniture Gallery</h3>
      </div>
      <div className={styles.panelBar}>
        <ul>
          {gallery.map(item => (
            <li key={item.id}>
              <a
                href='/#'
                className={item.id === activeCategory ? styles.active : ''}
                onClick={event => handleCategoryChange(event, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={fadeTrue ? styles.fadeIn : styles.fadeOut}>
        {products
          .filter(product => product.id === activeProduct)
          .map(product => (
            <div
              key={product.id}
              className={
                styles.imageBig + ' ' + (fadeTrue ? styles.fadeIn : styles.fadeOut)
              }
            >
              <div>
                <img
                  src={product.image !== undefined ? product.image : `${defaultImage}`}
                  alt={product.name}
                ></img>
              </div>
              <div className={styles.toolsWrapper}>
                <div className={styles.toolsbox}>
                  <Button variant='gallery' className={styles.toolsItem}>
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                  <span>Like it</span>
                </div>
                <div className={styles.toolsbox}>
                  <Button variant='gallery' className={styles.toolsItem}>
                    <FontAwesomeIcon icon={faExchangeAlt} />
                  </Button>
                  <span>Compare it</span>
                </div>
                <div className={styles.toolsbox}>
                  <Button variant='gallery' className={styles.toolsItem}>
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <span>Show more</span>
                </div>
                <div className={styles.toolsbox}>
                  <Button variant='gallery' className={styles.toolsItem}>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                  </Button>
                  <span>Add to cart</span>
                </div>
              </div>
              <div className={styles.nameWrapper}>
                <div className={styles.namePrice}>
                  <div className={styles.priceNew}>${product.price}</div>
                  <div className={styles.priceOld}>$160.00</div>
                </div>
                <div className={styles.nameRange}>
                  <h6>{product.name}</h6>
                  <div className={styles.nameStars}>
                    <ProductRating
                      id={product.id}
                      starRating={starRating}
                      stars={product.stars}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

        <div className={styles.slider}>
          <div className={styles.arrow} onClick={handleSlideLeft}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
          </div>
          {categoryProducts
            .slice(slideNumber, slideNumber + widthChange(mobileView))
            .map(product => (
              <div
                key={product.id}
                className={styles.thumbnail}
                onClick={() => handleProductChange(product.id)}
              >
                <img
                  alt={product.name}
                  src={product.image !== undefined ? product.image : `${defaultImage}`}
                  className={product.id === activeProduct ? styles.active : ''}
                ></img>
              </div>
            ))}
          <div className={styles.arrow} onClick={handleSlideRight}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
          </div>
        </div>
      </div>
    </div>
  );
};

GallerySlider.propTypes = {
  name: PropTypes.string,
  gallery: PropTypes.array,
  products: PropTypes.array,
  starRating: PropTypes.bool,
};

export default GallerySlider;
