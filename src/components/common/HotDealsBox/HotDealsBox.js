import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealsBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const HotDealsBox = ({ name, price, promo, stars, id, image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.buttons}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
      <div className={styles.counter}>
        <ul>
          <li>
            <h6>25</h6>
            <p>Days</p>
          </li>
          <li>
            <h6>10</h6>
            <p>Hrs</p>
          </li>
          <li>
            <h6>45</h6>
            <p>Min</p>
          </li>
          <li>
            <h6>30</h6>
            <p>Sec</p>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='/#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faEye} className={styles.icon}>
            Favorite
          </FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faHeart} className={styles.icon}>
            Add to compare
          </FontAwesomeIcon>
        </Button>
        <Button variant='outline'>
          <FontAwesomeIcon icon={faExchangeAlt} className={styles.icon}>
            Add to compare
          </FontAwesomeIcon>
        </Button>
      </div>
      <div className={styles.price}>
        <Button noHover variant='small' className={styles.promoPrice}>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

HotDealsBox.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  image: PropTypes.string,
};

export default HotDealsBox;
