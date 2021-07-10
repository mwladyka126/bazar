import React from 'react';
import styles from './SocialMediaNavigation.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterest,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../../common/Button/Button';

const SocialMediaNavigation = () => (
  <div className='row'>
    <Button variant='facebook' className={styles.buttonFacebook}>
      <FontAwesomeIcon className={styles.facebook} icon={faFacebookF} />
      Share
    </Button>
    <Button variant='google' className={styles.buttonGoogle}>
      <FontAwesomeIcon className={styles.google} icon={faGooglePlusG} />
      Google
    </Button>
    <Button variant='twitter' className={styles.buttonTwitter}>
      <FontAwesomeIcon className={styles.twitter} icon={faTwitter} />
      Tweet
    </Button>
    <Button variant='google' className={styles.buttonGoogle}>
      <FontAwesomeIcon className={styles.google} icon={faPinterest} />
      Pinterest
    </Button>
    <Button variant='twitter' className={styles.buttonLinkedIn}>
      <FontAwesomeIcon className={styles.linkedIn} icon={faLinkedin} />
      LinkedIn
    </Button>
  </div>
);

export default SocialMediaNavigation;
