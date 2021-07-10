import React from 'react';
import styles from './Newsletter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const Newsletter = () => (
  <div className={styles.root}>
    <div className={styles.input}>
      <h4>NEWSLETTER:</h4>
      <div className={styles.inputField}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </div>
        <input
          icon={faLongArrowAltRight}
          type='text'
          placeholder='Enter your email address'
          required
        />
      </div>
      <div className={styles.button}>
        <Button variant='small-newsletter'>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faLongArrowAltRight}
          ></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  </div>
);

export default Newsletter;
