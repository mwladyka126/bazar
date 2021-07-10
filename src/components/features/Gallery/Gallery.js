import React from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import GallerySlider from './GallerySliderContainer';
import Button from '../../common/Button/Button';

const Gallery = props => {
  const { promoProduct } = props;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.row}>
          <div className='col-12 col-md-6'>
            <GallerySlider />
          </div>
          <div className={'col-12 col-md-6'}>
            <div className={styles.imageWrapper}>
              <img src={promoProduct.link} alt={promoProduct.category}></img>
              <div className={styles.content}>
                <div className={styles.contentInfo}>
                  <p>
                    from <span className={styles.bigText}>{promoProduct.price}</span>
                  </p>
                </div>
                <p className={styles.product}>{promoProduct.name}</p>
                <div className={styles.contentButton}>
                  <Button variant='main' className={styles.button}>
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  promoProduct: PropTypes.object,
};

export default Gallery;
