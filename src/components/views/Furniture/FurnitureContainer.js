import { connect } from 'react-redux';
import Furniture from './Furniture';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

export default connect(mapStateToProps)(Furniture);
