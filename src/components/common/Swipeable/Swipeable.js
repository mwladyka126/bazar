import React from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

const Swipeable = ({ activePage, children, changePage }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => changePage(activePage, 1),
    onSwipedRight: () => changePage(activePage, -1),
    delta: 30,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  return <div {...handlers}>{children} </div>;
};

Swipeable.propTypes = {
  activePage: PropTypes.node,
  children: PropTypes.node,
  changePage: PropTypes.func,
};

export default Swipeable;
