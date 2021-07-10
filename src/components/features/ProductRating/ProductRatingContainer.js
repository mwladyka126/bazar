import { connect } from 'react-redux';

import ProductRating from './ProductRating';
import { setRating } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  setRating: value => dispatch(setRating(value)),
});

export default connect(null, mapDispatchToProps)(ProductRating);
