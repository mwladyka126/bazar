import { connect } from 'react-redux';

import Promotion from './Promotion';

const mapStateToProps = state => ({
  promotion: state.promotion,
});

export default connect(mapStateToProps)(Promotion);
