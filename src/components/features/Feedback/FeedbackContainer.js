import { connect } from 'react-redux';

import Feedback from './Feedback';

const mapStateToProps = state => ({
  feedbacks: state.feedbacks,
});

export default connect(mapStateToProps)(Feedback);
