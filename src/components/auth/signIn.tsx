import PersonPinIcon from '@mui/icons-material/PersonPin';
import Link from 'next/link';
import React from 'react';

import { inputTypes } from '@/helper/common';

import CInputFiled from '../input';
import styles from './index.module.scss';

const signInUser = (props) => {
  const { handleChange, handleSignInRequest } = props;

  return (
    <div className={styles['guest-signIn-page-wrapper']}>
      <div className={styles['signIn-page-inner-wrapper']}>
        <div className={styles.logo}>
          <PersonPinIcon fontSize="large" />
        </div>

        <span className={styles['heading-top']}>User Sign In</span>
        <div className="flex flex-col ">
          <div className="py-2">
            <CInputFiled
              type={inputTypes.TEXT}
              handleChange={handleChange}
              value={''}
              name="text"
              label="text"
            />
          </div>

          <div className="py-2">
            <CInputFiled
              type={inputTypes.TEXT}
              handleChange={handleChange}
              value={''}
              name="text"
              label="text"
            />
          </div>
          <div className={styles['forget-pass-wrap']}>
            <span className={styles['forget-password']}>
              <Link href="/auth/forgetPassword">
                <span className="sign-up-txt"> Forgot Password</span>
              </Link>
            </span>
          </div>
          <div className="">
            <button
              className={styles['sign-up-button']}
              onClick={handleSignInRequest}
            >
              Sign In
            </button>
          </div>

          <div>
            <p className={`${styles['forget-password']} ${styles.signUp}`}>
              Don't have an account?
              <Link href="/auth/signUp">
                <a>
                  <span className="sign-up-txt"> Sign Up</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default signInUser;
