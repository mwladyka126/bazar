import { connect } from 'react-redux';

import CompanyClaim from './CompanyClaim';

import { getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartAmount: getCount(state),
});

export default connect(mapStateToProps)(CompanyClaim);
