import React from 'react';
import styles from './Search.module.scss';

import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

function noProductsFound(products) {
  if (!products.length) {
    return  <p className={styles.noProduct}>No products found...</p>
  }
}

const Search = ({products}) => {
  return (
    <div className={styles.root}>
      <NewFurniture products={products} showCategories={false} itemsPerSlide={8} />
      {noProductsFound(products)}
    </div>
  );
};

export default Search;
