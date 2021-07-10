import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import ProductMore from '../../common/ProductMore/ProductMore';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Newsletter from '../../common/Newsletter/Newsletter';
import Brands from '../../features/Brands/BrandsContainer';
import ProductSubpage from '../../features/ProductSubpage/ProductSubpage';

const ProductPage = product => {
  return (
    <div className={styles.root}>
      <ProductSubpage {...product} />
      <ProductMore />
      <NewFurniture itemsPerSlide={4} />
      <Brands />
      <Newsletter />
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object,
};

export default ProductPage;
