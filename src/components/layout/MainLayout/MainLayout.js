import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.resizer = null;

    this.checkRwdMode();
  }

  componentDidMount() {
    this.resizer = window.addEventListener('resize', () => this.checkRwdMode());
  }

  componentWillUnmount() {
    this.resizer = window.removeEventListener('resize', () => this.checkRwdMode());
  }

  checkRwdMode() {
    const windowInnerWidth = window.innerWidth;
    const { setResponsiveMode, currentRwdMode } = this.props;
    if (windowInnerWidth <= 576 && currentRwdMode !== 'mobile') {
      setResponsiveMode('mobile');
    } else if (
      windowInnerWidth > 576 &&
      windowInnerWidth <= 992 &&
      currentRwdMode !== 'tablet'
    ) {
      setResponsiveMode('tablet');
    } else if (windowInnerWidth > 992 && currentRwdMode !== 'desktop') {
      setResponsiveMode('desktop');
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  setResponsiveMode: PropTypes.func,
  currentRwdMode: PropTypes.string,
};

export default MainLayout;
