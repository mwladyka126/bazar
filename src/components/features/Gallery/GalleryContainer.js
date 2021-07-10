import { connect } from 'react-redux';
import { getAll, getGalleryPromoProduct } from '../../../redux/productsRedux.js';
import Gallery from './Gallery';

const mapStateToProps = state => ({
  products: getAll(state),
  promoProduct: getGalleryPromoProduct(state),
});

export default connect(mapStateToProps)(Gallery);
