import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux';
import { getNew } from '../../../redux/productsRedux';
import {
  getCompared,
  changeCompare,
  getViewOn,
  changeQuickView,
} from '../../../redux/productsRedux';

const mapStateToProps = (state, currentProps) => {
  const props = {
  categories: getAll(state),
  getCompared: getCompared(state),
  getViewOn: getViewOn(state),
  changeCompare: changeCompare(state),
  changeQuickView: changeQuickView(state),
  currentRwdMode: state.rwd.mode,
  }
  
  if (!currentProps.products) {
    props.products = getNew(state);  
  }
  return props;
  
};

const mapDispatchToProps = dispatch => ({
  changeQuickView: newState => dispatch(changeQuickView(newState)),
  changeCompare: newState => dispatch(changeCompare(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
