import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductRating.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const ProductRating = ({ id, starRating, stars, setRating }) => {
  const [isRated, setHover] = useState(false);
  const [starNumber, setHoverRating] = useState(0);

  return (
    <div className={starRating || isRated ? styles.starRated : styles.starDefault}>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          className={styles.stars}
          key={i}
          onClick={() => setRating({ id, i })}
          onMouseOver={() => {
            setHover(true);
            setHoverRating(i);
          }}
          onMouseLeave={() => {
            setHover(false);
            setHoverRating(0);
          }}
        >
          {isRated ? (
            <FontAwesomeIcon icon={starNumber < i ? regularStar : faStar}>
              {i} stars
            </FontAwesomeIcon>
          ) : !isRated && i <= stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={regularStar}>{i} stars</FontAwesomeIcon>
          )}
        </span>
      ))}
    </div>
  );
};

ProductRating.propTypes = {
  id: PropTypes.string,
  starRating: PropTypes.bool,
  stars: PropTypes.number,
  setRating: PropTypes.func,
};

export default ProductRating;
