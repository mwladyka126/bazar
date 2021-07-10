import React from 'react';
import styles from './Login.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      nameError: '',
      passwordError: '',
    };
  }

  handleUserChange = event => {
    this.setState({ user: event.target.value }, () => {
      this.validateUserName();
    });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => {
      this.validatePassword();
    });
  };

  validateUserName = () => {
    const { user } = this.state;
    this.setState({
      nameError: user === 'admin' ? null : 'Wrong user name',
    });
  };

  validatePassword = () => {
    const { password } = this.state;
    this.setState({
      passwordError: password === 'pass' ? null : 'Invalid password',
    });
  };

  validateAccess = () => {
    this.validatePassword();
    this.validateUserName();
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <h1>Login</h1>
        </div>
        <form>
          <div>
            <h5>
              <FontAwesomeIcon className={styles.icon} icon={faUser} /> Username
            </h5>
            <input
              type='text'
              placeholder='Username'
              id='user'
              value={this.state.user}
              onChange={this.handleUserChange}
              onBlur={this.validateUserName}
            ></input>
            <div className={styles.error}>{this.state.nameError}</div>
          </div>
          <div>
            <h5>
              <FontAwesomeIcon className={styles.icon} icon={faKey} /> Password
            </h5>
            <input
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handlePasswordChange}
              onBlur={this.validatePassword}
            ></input>
            <div className={styles.error}>{this.state.passwordError}</div>
          </div>
          <Button
            variant='main'
            href={this.state.nameError || this.state.passwordError ? '/login' : '/'}
            onFocus={this.validateAccess}
          >
            Log in
          </Button>
        </form>
        <div className={styles.features}>
          <div className={styles.featureBox}>
            <h5>Forgot your password?</h5>
            <Button variant='main' href='/login/#'>
              Reset password
            </Button>
          </div>
          <div className={styles.featureBox}>
            <h5>Need a new account?</h5>
            <Button variant='main' href='/login/#'>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
