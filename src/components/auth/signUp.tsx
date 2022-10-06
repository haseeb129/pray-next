import PersonPinIcon from '@mui/icons-material/PersonPin';
import React, { useState } from 'react';

import { inputTypes } from '@/helper/common';

import CInputFiled from '../input';
import styles from './index.module.scss';

export interface SignUpStateInterfacr {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpUser = (props: any) => {
  const { onSignUpUser } = props;
  const [info, setInfo] = useState<SignUpStateInterfacr>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLocalSubmit = () => {
    onSignUpUser(info);
  };

  const handleChange = (name: string, value: string) => {
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className={styles['guest-signIn-page-wrapper']}>
      <div className={styles['signIn-page-inner-wrapper']}>
        {/* <div className={styles.logo}>
          <PersonPinIcon fontSize="large" />
        </div> */}

        <span className={styles['heading-top']}>User Sign Up</span>
        <div className="flex flex-col ">
          <div className="py-2">
            <CInputFiled
              type={inputTypes.TEXT}
              handleChange={handleChange}
              value={info.name}
              name="name"
              label="Name"
            />
          </div>

          <div className="py-2">
            <CInputFiled
              type={inputTypes.EMAIL}
              handleChange={handleChange}
              value={info.email}
              name="email"
              label="Email"
            />
          </div>
          <div className="py-2">
            <CInputFiled
              type={inputTypes.PASSWORD}
              handleChange={handleChange}
              value={info.password}
              name="password"
              label="Password"
            />
          </div>
          <div className="py-2">
            <CInputFiled
              type={inputTypes.PASSWORD}
              handleChange={handleChange}
              value={info.confirmPassword}
              name="confirmPassword"
              label="Confirm Password"
            />
          </div>

          <div className="">
            <button
              className={styles['sign-up-button']}
              onClick={handleLocalSubmit}
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
