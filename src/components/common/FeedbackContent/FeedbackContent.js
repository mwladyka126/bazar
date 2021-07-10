import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackContent.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeedbackContent = ({ text, name, position, image, id }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container + ' col-xs-12 col-md-12'}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
        </div>
        <div className={styles.textWrapper + ' col-xs-12 col-md-12'}>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.person}>
          <div className={styles.image}>
            <img src={image} alt={name} />
          </div>
          <div className={styles.data}>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FeedbackContent.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  position: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
};
export default FeedbackContent;
