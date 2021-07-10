import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';

import styles from './ProductBoxList.module.scss';

const ProductBoxList = ({ name, price, promo, stars, image, id, starRating, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img className={styles.img} src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
      </div>
      <div className={styles.content}>
        <Link id={id} to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.price}>$ {price}</div>
        <div className={styles.stars}>
          <ProductRating id={id} starRating={starRating} stars={stars} />
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.buttons}>
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faSearch}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button variant='favourite' className={styles.button}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBoxList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  starRating: PropTypes.bool,
};

export default ProductBoxList;
