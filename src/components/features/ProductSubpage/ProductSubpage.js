import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductSubpage.module.scss';
import SocialMediaNavigation from '../../common/SocialMediaNavigation/SocialMediaNavigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEnvelope,
  faMinus,
  faPlus,
  faArrowsAlt,
} from '@fortawesome/free-solid-svg-icons';

import ProductRating from '../../features/ProductRating/ProductRatingContainer';
import Button from '../../common/Button/Button';

const ProductSubpage = ({
  name,
  price,
  promo,
  stars,
  image,
  id,
  starRating,
  getCompared,
  changeCompare,
  addProduct,
  favourite,
  setFavourite,
}) => {
  const addToCart = event => {
    event.preventDefault();
    addProduct({ id, price });
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row '}>
          <div className='col-12 col-md-5'>
            <div className={styles.imageWrapper}>
              <img src={image} alt={''} />
              <Button className={styles.button} variant='product'>
                <FontAwesomeIcon icon={faArrowsAlt} />
              </Button>
            </div>
            <div className={styles.galleryWrapper}>
              <div className={styles.arrowLeft}>
                <Button variant='product'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
              </div>
              <div className={styles.gallery}>
                <div className={styles.thumbnail}>
                  <img src={image} alt={''} />
                </div>
                <div className={styles.thumbnail}>
                  <img src={image} alt={''} />
                </div>
                <div className={styles.thumbnail}>
                  <img src={image} alt={''} />
                </div>
                <div className={styles.thumbnail}>
                  <img src={image} alt={''} />
                </div>
              </div>

              <div className={styles.arrowRight}>
                <Button variant='product'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-7'>
            <div className={`${styles.leftColumn} row`}>
              <div className='col-9'>
                <h4> {name}</h4>
                <div className={`${styles.rating} row `}>
                  <div>
                    <ProductRating id={id} starRating={starRating} stars={stars} />
                  </div>
                  <div>
                    <p>(0 reviews)</p>
                  </div>
                  <div>
                    <p>Add your review</p>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <Button variant='product'>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <Button variant='product'>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
              </div>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className={`${styles.price} row`}>
              <div className={styles.oldPrice}>$350.00</div>
              <div className={styles.newPrice}>$ {price}</div>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className={`${styles.actions} row`}>
              <Button variant='product' onClick={addToCart}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                ADD TO CART
              </Button>
              <Button
                variant='product'
                onClick={e => {
                  e.preventDefault();
                  setFavourite(id, !favourite);
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </Button>
              <Button variant='product'>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </Button>
              <Button
                variant='product'
                onClick={() => {
                  if (getCompared.find(item => item.id === id)) {
                    changeCompare(id);
                  } else if (getCompared.length <= 3) {
                    changeCompare(id);
                  }
                }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </div>
            <div className={`${styles.amount} row`}>
              <p>Quantity:</p>
              <input className={styles.input} type='number'></input>
              <Button className={styles.button} variant='product'>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <Button className={styles.button} variant='product'>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className={`${styles.overview} row`}>
              <p>
                <b>Quick Overview</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className={`${styles.overview} row`}>
              <p>
                <b>Availability: </b>
              </p>
              <p>In Stock</p>
            </div>
            <div className={`${styles.overview} row`}>
              <p>
                <b>Category:</b>
              </p>
              <p>Furniture</p>
            </div>
            <div className={`${styles.line} col-12 `}></div>
            <div className={styles.socialMedia}>
              <SocialMediaNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductSubpage.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  starRating: PropTypes.bool,
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
  addProduct: PropTypes.func,
  setFavourite: PropTypes.func,
  favourite: PropTypes.bool,
};

export default ProductSubpage;
