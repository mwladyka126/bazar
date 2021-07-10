import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

import { Link } from 'react-router-dom';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col-6 col-md-6 col-sm-8 text-left ${styles.topOptions}`}>
          <ul>
            <li>
              <a href='/#'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
              <ul className={styles.list1}>
                <li>
                  <a href='/#'>USD</a>
                </li>
                <li>
                  <a href='/#'>PLN</a>
                </li>
                <li>
                  <a href='/#'>EUR</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/#'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
              <ul className={styles.list2}>
                <li>
                  <a href='/#'>English</a>
                </li>
                <li>
                  <a href='/#'>Polish</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
              <ul className={styles.list3}>
                <li>
                  <a href='/#'>Payment options</a>
                </li>
                <li>
                  <a href='/#'>Delivery</a>
                </li>
                <li>
                  <a href='/#'>Shop list</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={`col-6 col-md-6 col-sm-4 text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <Link to='/login'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} />{' '}
                <span className={styles.topbarText}>Login</span>
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} />{' '}
                <span className={styles.topbarText}>Register</span>
              </Link>
            </li>
            <li>
              <a href='/#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
