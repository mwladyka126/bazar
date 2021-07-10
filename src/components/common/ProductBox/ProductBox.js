import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import ProductRating from '../../features/ProductRating/ProductRatingContainer';

const ProductBox = ({
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
  getViewOn,
  changeQuickView,
}) => {
  const addToCart = event => {
    event.preventDefault();
    addProduct({ id, price, name, image, ...ProductBox });
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img className={styles.img} src={image} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button
            variant='small'
            className={styles.button}
            onClick={event => {
              event.preventDefault();
              if (getViewOn.find(item => item.id === id)) {
                changeQuickView(id);
              } else if (getViewOn.length < 1) {
                changeQuickView(id);
              }
            }}
          >
            Quick View
          </Button>
          <Button variant='small' className={styles.button} onClick={addToCart}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link id={id} to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <div>
          <ProductRating id={id} starRating={starRating} stars={stars} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant={favourite ? 'favourite' : 'outline'}
            onClick={e => {
              e.preventDefault();
              setFavourite(id, !favourite);
            }}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={e => {
              e.preventDefault();
              if (getCompared.find(item => item.id === id)) {
                changeCompare(id);
              } else if (getCompared.length <= 3) {
                changeCompare(id);
              }
            }}
            variant='outline'
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  starRating: PropTypes.bool,
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
  getViewOn: PropTypes.array,
  changeQuickView: PropTypes.func,
  addProduct: PropTypes.func,
  setFavourite: PropTypes.func,
  favourite: PropTypes.bool,
};

export default ProductBox;
