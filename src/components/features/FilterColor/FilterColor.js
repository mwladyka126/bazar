import React from 'react';
import styles from './FilterColor.module.scss';

const FilterColor = () => {
  return (
    <div className={styles.filterHeading}>
      <div className={styles.filterColor}>
        <span className={styles.red}></span>
        <p>Red</p>
      </div>
      <div className={styles.filterColor}>
        <span className={styles.black}></span>
        <p>Black</p>
      </div>
      <div className={styles.filterColor}>
        <span className={styles.yellow}></span>
        <p>Yellow</p>
      </div>
      <div className={styles.filterColor}>
        <span className={styles.blue}></span>
        <p>Blue</p>
      </div>
      <div className={styles.filterColor}>
        <span className={styles.pink}></span>
        <p>Pink</p>
      </div>
      <div className={styles.filterColor}>
        <span className={styles.green}></span>
        <p>Green</p>
      </div>
    </div>
  );
};

export default FilterColor;
