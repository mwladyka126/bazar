import React from 'react';
import PropTypes from 'prop-types';
import styles from './HotDealsCarousel.module.scss';
import Button from '../Button/Button';

const HotDealsCarousel = ({ image, name }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.description}>
        <h1>
          INDOOR <span>FURNITURE</span>
        </h1>
        <h3>Save up to 50% of all furniture</h3>
      </div>
      <div className={styles.buttons}>
        <Button variant='main-light'>SHOP NOW</Button>
      </div>
    </div>
  </div>
);

HotDealsCarousel.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default HotDealsCarousel;
