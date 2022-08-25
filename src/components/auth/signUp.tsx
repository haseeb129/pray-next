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
