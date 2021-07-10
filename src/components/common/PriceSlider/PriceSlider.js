import React from 'react';
import PropTypes from 'prop-types';
import styles from './PriceSlider.module.scss';

const PriceSlider = ({
  products, 
  category, 
  getProductByPrice, 
  setCategoryProducts, 
  setPriceValuesTo, 
  setPriceValuesFrom}) => {

  const handlePriceTo = event => {
    setCategoryProducts(products.filter(item => item.category === category));
    if (event.target.value.length === 0) {
      setPriceValuesTo(Math.max(...getProductByPrice));
    }
    if (event.target.value.length !== 0){
      event.persist();
      setPriceValuesTo(parseInt(event.target.value));
    }
  };
  
  const handlePriceFrom = event => {
    setCategoryProducts(products.filter(item => item.category === category));
    if (event.target.value.length === 0) {
      setPriceValuesFrom(0);
    }
    if (event.target.value.length !== 0) {
      event.persist();
      setPriceValuesTo(parseInt(event.target.value));
    }
  };

  return (
    <div className={styles.root}>
        <form>
          <input type='text' placeholder='from' onChange={handlePriceFrom} />
          <div>-</div>
          <input type='text' placeholder='to' onChange={handlePriceTo} />
        </form>
    </div>
  );
};

PriceSlider.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
  category: PropTypes.string,
  setCategoryProducts: PropTypes.func,
  setPriceValuesTo: PropTypes.func,
  setPriceValuesFrom: PropTypes.func,
};

export default PriceSlider;
