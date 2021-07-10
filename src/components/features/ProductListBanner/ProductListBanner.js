import React from 'react';
import styles from './ProductListBanner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router-dom';

const ProductListBanner = props => {
  const { url } = useRouteMatch();

  const activePage = url.replace('/shop/', '').toLocaleUpperCase();

  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <div className={styles.headerTop}>
          Bedroom <strong>furniture</strong>
        </div>
        <div className={styles.headerBottom}>
          always <span>25%</span> off or more
        </div>
      </div>
      <div className={styles.bannerNav}>
        <a href='/'>Home</a>
        <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
        <div className={styles.bannerCategory}> {activePage} </div>
      </div>
    </div>
  );
};

export default ProductListBanner;
