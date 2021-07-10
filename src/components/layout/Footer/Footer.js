import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = ({ children }) => (
  <footer className={styles.root}>
    <div className={styles.footerMenu}>
      <div className='container'>
        <div className='row'>
          <div className={styles.footerMenuItem}>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <Link to='/info/about_us'>About us</Link>
                </li>
                <li>
                  <Link to='/info/policy'>Policy</Link>
                </li>
                <li>
                  <Link to='/info/conditions'>Conditions</Link>
                </li>
                <li>
                  <Link to='/info/online_support'>Online support</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerMenuItem}>
            <div className={styles.menuWrapper}>
              <h6>My account</h6>
              <ul>
                <li>
                  <Link to='/account/login'>Login</Link>
                </li>
                <li>
                  <Link to='/account/my_cart'>My cart</Link>
                </li>
                <li>
                  <Link to='/account/wishlist'>Wishlist</Link>
                </li>
                <li>
                  <Link to='/account/checkout'>Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerMenuItem}>
            <div className={styles.menuWrapper}>
              <h6>Information</h6>
              <ul>
                <li>
                  <Link to='/info/specials'>Specials</Link>
                </li>
                <li>
                  <Link to='/info/new_products'>New products</Link>
                </li>
                <li>
                  <Link to='/info/best_sellers'>Best Sellers</Link>
                </li>
                <li>
                  <Link to='/info/out_stores'>Out Stores</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerMenuItem}>
            <div className={styles.menuWrapper}>
              <h6>Orders</h6>
              <ul>
                <li>
                  <Link to='/orders/payment_options'>Payment options</Link>
                </li>
                <li>
                  <Link to='/orders/shipping_and_delivery'>Shipping and delivery</Link>
                </li>
                <li>
                  <Link to='/orders/returns'>Returns</Link>
                </li>
                <li>
                  <Link to='/orders/shipping'>Shipping</Link>
                </li>
              </ul>
            </div>
            <img src='/images/cards.png' alt='Supported credit cards' />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomBar}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-sm-12 text-center'></div>
          <div className={'col-6 text-center ' + styles.copyright}>
            <p>©Copyright 2016 Bazar | All Rights Reserved</p>
          </div>
          <div className={'col-6 text-right ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
