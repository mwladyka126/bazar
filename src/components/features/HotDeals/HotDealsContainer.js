import { connect } from 'react-redux';
import HotDeals from './HotDeals';
import { getHotDeals, getHotDeals_Slider } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getHotDeals(state),
  hotdeals_slider: getHotDeals_Slider(state),
});

export default connect(mapStateToProps)(HotDeals);
