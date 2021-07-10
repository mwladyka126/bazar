import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';

class Promotion extends React.Component {
  render() {
    const { promotion } = this.props;
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={`${styles.box} col-xs-12 col-md-6`}>
              <div className={styles.imageLeft}>
                <div className={styles.imageWrapper}>
                  <img src={promotion[0].image} alt={promotion[0].id} />
                </div>
                <div className={styles.promo1}>
                  <p className={styles.category}>{promotion[0].category}</p>
                  <p>{promotion[0].product}</p>
                  <p className={styles.sale}>{promotion[0].sale}</p>
                </div>
              </div>
            </div>
            <div className={`${styles.box} col-xs-12 col-md-6`}>
              <div className={styles.imageRight}>
                <img src={promotion[1].image} alt={promotion[1].id} />
                <div className={styles.promo2}>
                  <p>
                    <span className={styles.category}>{promotion[1].category}</span>
                    <span className={styles.product}>{promotion[1].product}</span>
                  </p>
                  <p className={styles.addInfo}>{promotion[1].addInfo}</p>
                  <p className={styles.sale}>{promotion[1].sale}</p>
                </div>
              </div>
              <div className={`${styles.imageRight} ${styles.imageBottom}`}>
                <img src={promotion[2].image} alt={promotion[2].id} />
                <div className={styles.promo3}>
                  <p>
                    <span className={styles.category}>{promotion[2].category}</span>
                    <span className={styles.addInfo}>{promotion[2].addInfo}</span>
                  </p>
                  <p className={styles.sale}>{promotion[2].sale}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotion.propTypes = {
  promotion: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      product: PropTypes.string,
      sale: PropTypes.string,
      addInfo: PropTypes.string,
      image: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
Promotion.defaultProps = {
  promotion: [],
};

export default Promotion;
