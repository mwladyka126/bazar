import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PriceSlider from '../../common/PriceSlider/PriceSliderContainer';
import { StylesProvider } from '@material-ui/core/styles';
import FilterColor from '../../features/FilterColor/FilterColor';

import Furniture from './../Furniture/FurnitureContainer';
import FilterByCategories from '../../common/FilterByCategories/FilterByCategories';
import ProductListBanner from '../../features/ProductListBanner/ProductListBanner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import Newsletter from '../../common/Newsletter/Newsletter';
import Brands from '../../features/Brands/BrandsContainer';
import { useHistory } from 'react-router-dom';

const ProductList = ({ products, getProductByPrice }) => {
  const [category, setCategory] = useState(window.location.pathname.split('/')[2]);
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter(item => item.category === category)
  );
  const [priceValuesTo, setPriceValuesTo] = useState(Math.max(...getProductByPrice));
  const [priceValuesFrom, setPriceValuesFrom] = useState(0);
  const history = useHistory();
  const initialLoad = useRef(false);

  history.listen(() => {
    setCategory(window.location.pathname.split('/')[2]);
    setCategoryProducts(
      products.filter(item => item.category === window.location.pathname.split('/')[2])
    );
  });

  useEffect(() => {
    if (initialLoad.current) {
      const filteredProduct = categoryProducts.filter(product => {
        return product.price >= priceValuesFrom && product.price <= priceValuesTo;
      });
      setCategoryProducts(filteredProduct);
    } else {
      initialLoad.current = true;
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceValuesFrom, priceValuesTo]);

  return (
    <div className={styles.root}>
      <Grid>
        <Row>
          <Col className='col-12'>
            <ProductListBanner />
          </Col>
        </Row>
        <Row>
          <Col md={8} lg={9} className={styles.content}>
            <div className='col-12'>
              <Furniture categoryProducts={categoryProducts} itemsPerSlide={6} />
            </div>
          </Col>
          <Col xs md={4} lg={3} className={styles.filters}>
            <h3 className={styles.header}>Filtry</h3>
            <FilterByCategories />
            <div className={styles.filterRange}>
              <h5 className={styles.filterRange__name}>Filter by price</h5>
              <StylesProvider injectFirst>
                <PriceSlider
                  setPriceValuesTo={setPriceValuesTo}
                  setPriceValuesFrom={setPriceValuesFrom}
                  category={category}
                  setCategoryProducts={setCategoryProducts}
                />
              </StylesProvider>
            </div>

            <div>
              <h5 className={styles.filterRange__name}>Filter by color</h5>
              <FilterColor />
            </div>
            <div className={styles.headerTags}>
              <span className={styles.title}>Filter by tag</span>
            </div>
            <div className={`${styles.filtersList}`}>
              <ul className={`${styles.tagFilter}`}>
                <li>
                  <div className={styles.tag}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <span>Table</span>
                  </div>
                </li>
                <li>
                  <div className={styles.tag}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <span>Chair</span>
                  </div>
                </li>
                <li>
                  <div className={styles.tag}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <span>Hand Bag</span>
                  </div>
                </li>
                <li>
                  <div className={styles.tag}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <span>Women</span>
                  </div>
                </li>
                <li>
                  <div className={styles.tag}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <span>Fashion</span>
                  </div>
                </li>
                <li>
                  <div className={styles.tag}>
                    <FontAwesomeIcon className={styles.icon} icon={faTags} />
                    <span>Clothes</span>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
      <Brands />
      <div className={styles.newsletter}>
        <Newsletter />
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
};

export default ProductList;
