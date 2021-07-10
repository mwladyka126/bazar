import React from 'react';
import styles from './FilterSize.module.scss';

const FilterSize = () => (
  <div className={styles.root}>
    <ul>
      <li>
        <div className={styles.check}>
          <input type='checkbox' />
          <label>S</label>
        </div>
        <div className={styles.number}>1</div>
      </li>
      <li>
        <div className={styles.check}>
          <input type='checkbox' />
          <label>M</label>
        </div>
        <div className={styles.number}>1</div>
      </li>
      <li>
        <div className={styles.check}>
          <input type='checkbox' />
          <label>L</label>
        </div>
        <div className={styles.number}>1</div>
      </li>
      <li>
        <div className={styles.check}>
          <input type='checkbox' />
          <label>XL</label>
        </div>
        <div className={styles.number}>1</div>
      </li>
      <li>
        <div className={styles.check}>
          <input type='checkbox' />
          <label>XXL</label>
        </div>
        <div className={styles.number}>1</div>
      </li>
    </ul>
  </div>
);

export default FilterSize;
