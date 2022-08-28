import PersonPinIcon from '@mui/icons-material/PersonPin';
import React from 'react';

import { inputTypes } from '@/helper/common';

import CInputFiled from '../input';
import styles from './index.module.scss';

const signUpUser = (props) => {
  const { handleChange, handleSignInRequest } = props;

  return (
    <div className={styles['guest-signIn-page-wrapper']}>
      <div className={styles['signIn-page-inner-wrapper']}>
        <div className={styles.logo}>
          <PersonPinIcon fontSize="large" />
        </div>

        <span className={styles['heading-top']}>User Sign Up</span>
        <div className="flex flex-col ">
          <div className="py-2">
            <CInputFiled
              type={inputTypes.TEXT}
              handleChange={handleChange}
              value={''}
              name="name"
              label="Name"
            />
          </div>

          <div className="py-2">
            <CInputFiled
              type={inputTypes.EMAIL}
              handleChange={handleChange}
              value={''}
              name="email"
              label="Email"
            />
          </div>
          <div className="py-2">
            <CInputFiled
              type={inputTypes.PASSWORD}
              handleChange={handleChange}
              value={''}
              name="password"
              label="Password"
            />
          </div>
          <div className="py-2">
            <CInputFiled
              type={inputTypes.PASSWORD}
              handleChange={handleChange}
              value={''}
              name="confirmPassword"
              label="Confirm Password"
            />
          </div>

          <div className="">
            <button
              className={styles['sign-up-button']}
              onClick={handleSignInRequest}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default signUpUser;
