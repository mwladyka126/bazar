import { connect } from 'react-redux';
import ProductPage from './ProductPage';
import { addProduct } from '../../../redux/cartRedux';
import { setFavourite, getCompared, changeCompare } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const productId = props.match.params.productId;
  const getProductById = state.products.filter(product => product.id === productId);
  const product = getProductById[0];
  return {
    ...product,
    getCompared: getCompared(state),
    changeCompare: changeCompare(state),
  };
};

const mapDispatchToProps = dispatch => ({
  addProduct: value => dispatch(addProduct(value)),
  setFavourite: (id, isFavourite) => dispatch(setFavourite({ id, isFavourite })),
  changeCompare: newState => dispatch(changeCompare(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
