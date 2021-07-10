import { connect } from 'react-redux';
import { getAll, getGalleryCategories } from '../../../redux/productsRedux.js';
import GallerySlider from './GallerySlider';

const mapStateToProps = state => ({
  products: getAll(state),
  gallery: getGalleryCategories(state),
});

export default connect(mapStateToProps)(GallerySlider);
