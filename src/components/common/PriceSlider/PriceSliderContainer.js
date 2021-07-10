import { connect } from 'react-redux';

import PriceSlider from './PriceSlider';

import { getAll, getProductByPrice } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  getProductByPrice: getProductByPrice(state),
});

export default connect(mapStateToProps)(PriceSlider);
