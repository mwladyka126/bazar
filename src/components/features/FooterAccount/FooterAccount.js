import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterAccount.module.scss';

const FooterAccount = props => {
  const changeName = oldName => {
    const parseName = oldName.replace(/_/g, ' ');
    const firstLetter = parseName.substring(0, 1);
    const upperLetter = firstLetter.toUpperCase();
    const newName = upperLetter + parseName.substring(1);
    return newName;
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <h3>My Account</h3>
        <div className={styles.box}>
          <h4>{changeName(props.match.params.id)}</h4>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan
            consectetur massa in mattis. Proin vel nunc varius, fringilla odio eget,
            pretium lectus. Aliquam tincidunt turpis vel imperdiet consectetur.
            Curabitur sodales tortor a nulla eleifend fringilla. Cras et ligula nibh.
            Aenean viverra congue urna. Morbi interdum est nisi, et rhoncus arcu
            vestibulum a
          </div>
          <div className={styles.field}>
            <p>Content box</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterAccount.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default FooterAccount;
