import { connect } from 'react-redux';

import ProductList from './ProductList';

import { getAll } from '../../../redux/categoriesRedux';
import { getNew, getProductByPrice } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  getProductByPrice: getProductByPrice(state),
});

export default connect(mapStateToProps)(ProductList);
