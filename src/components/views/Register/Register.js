import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Register.module.scss';
import Button from '../../common/Button/Button';

const Register = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = () => {
    window.location.href = '/';
  };
  const password = useRef({});
  password.current = watch('password', '');

  return (
    <div className={styles.root}>
      <h3>Register</h3>
      <form className={styles.register}>
        <label htmlFor='fname'>First Name</label>
        <input
          type='text'
          name='firstname'
          placeholder='Your name'
          ref={register({ required: true, minLength: 3, maxLength: 30 })}
        />
        {errors.firstname && (
          <span className={styles.error}>Min. 3 max. 30 characters</span>
        )}
        <label htmlFor='lname'>Last Name</label>
        <input
          type='text'
          name='lastname'
          placeholder='Your last name'
          ref={register({ required: true, minLength: 3, maxLength: 30 })}
        />
        {errors.lastname && (
          <span className={styles.error}>Min. 3 max. 30 characters</span>
        )}
        <label htmlFor='lname'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='Your email address'
          ref={register({ required: true, pattern: /[@]{1}/ })}
        />
        {errors.email && (
          <span className={styles.error}>Incorrect e-mail address (use @)</span>
        )}
        <label htmlFor='lname'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Your password'
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.password && <span className={styles.error}>Min. 3 characters</span>}
        <label htmlFor='lname'>Confirm Password</label>
        <input
          type='password'
          name='repeatpassword'
          placeholder='Confirm password'
          ref={register({
            required: true,
            minLength: 3,
            validate: value => value === password.current,
          })}
        />
        {errors.repeatpassword && (
          <span className={styles.error}>The passwords do not match</span>
        )}
      </form>
      <div className={styles.button}>
        <Button onClick={handleSubmit(onSubmit)} variant='main'>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
