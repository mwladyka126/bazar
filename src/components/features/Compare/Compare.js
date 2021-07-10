import React from 'react';
import PropTypes from 'prop-types';
import styles from './Compare.module.scss';
import Button from '../../common/Button/Button';

const Compare = ({ getCompared, changeCompare }) => {
  let isActive = getCompared.length;
  if (isActive) {
    return (
      <div className={styles.component}>
        {getCompared.map(item => (
          <div
            key={item.id}
            className={styles.box}
            onClick={() => changeCompare(item.id)}
          >
            <img alt={'product'} src={item.image} className={styles.image}></img>
            <div className={styles.close}>x</div>
          </div>
        ))}
        <Button className={styles.button}>COMPARE</Button>
      </div>
    );
  } else {
    return '';
  }
};

Compare.propTypes = {
  getCompared: PropTypes.array,
  changeCompare: PropTypes.func,
  closeProp: PropTypes.func,
};

export default Compare;
