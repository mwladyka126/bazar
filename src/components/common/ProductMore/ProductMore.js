import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductMore.module.scss';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductMore = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.navLaptop}>
          <div className={'col-xs-6 col-md-3'}>DESCRIPTION</div>
          <div className={`${styles.active} col-xs-6 col-md-3`}>REVIEWS (0)</div>
          <div className={'col-xs-6 col-md-3'}>SPECIFICATION</div>
          <div className={'col-xs-6 col-md-3'}>CUSTOM TAB</div>
        </div>
        <div className={styles.navPhone}>
          <div className={'col-xs-6 col-md-3'}>DESCRIPTION</div>
          <div className={'col-xs-6 col-md-3'}>SPECIFICATION</div>
          <div className={'col-xs-6 col-md-3'}>CUSTOM TAB</div>
          <div className={`${styles.active} col-xs-6 col-md-3`}>REVIEWS (0)</div>
        </div>
        <div className={styles.review}>
          <p>There are no review for this product.</p>
          <p>Add a review</p>
          <p>Your Rating</p>
          <div className={styles.stars}>
            <span>Bad</span>
            <FontAwesomeIcon className={styles.star} icon={farStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
            <span>Good</span>
          </div>
          <div className={`${styles.reviewText} pt-3`}>
            <p>Your Review:</p>
            <textarea className={'col-xs-12 col-md-12'} rows='6'></textarea>
          </div>
          <div className={'pt-3 row'}>
            <div className={'col-xs-12 col-md-5'}>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name*'
                required
                className={'col-12 p-2'}
              />
            </div>
            <div className={'col-xs-12 col-md-5'}>
              <input
                type='text'
                name='mail'
                id='mail'
                placeholder='Email*'
                required
                className={'col-12 p-2'}
              />
            </div>
            <div className={'col-xs-12 col-md-2'}>
              <button className={styles.continue} type='submit'>
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductMore;
