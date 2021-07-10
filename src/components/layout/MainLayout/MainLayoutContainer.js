import { connect } from 'react-redux';

import MainLayout from './MainLayout';
import { setResponsiveMode } from '../../../redux/rwdModeRedux';

const mapStateToProps = state => ({
  currentRwdMode: state.rwd.mode,
});

const mapDispatchToProps = dispatch => ({
  setResponsiveMode: mode => dispatch(setResponsiveMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
