import {connect} from 'react-redux';
import Search from './Search';
import { getProductsForSearchResult } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  products: getProductsForSearchResult(state, props.match.params.textSearch)
});

export default connect(mapStateToProps)(Search);
