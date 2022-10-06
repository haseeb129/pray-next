import PersonPinIcon from '@mui/icons-material/PersonPin';
import React, { useState } from 'react';

import { inputTypes } from '@/helper/common';

import CInputFiled from '../input';
import styles from './index.module.scss';

export interface ForgetPasswordStateInterfacr {
  email: string;
}

const forgetPassword = (props: any) => {
  const { onForgetPassword } = props;
  const [info, setInfo] = useState<ForgetPasswordStateInterfacr>({
    email: '',
  });

  const handleLocalSubmit = () => {
    onForgetPassword(info);
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

        <span className={styles['heading-top']}>Forget Password</span>
        <div className="flex flex-col ">
          <div className="py-2">
            <CInputFiled
              type={inputTypes.EMAIL}
              handleChange={handleChange}
              value={info.email}
              name="email"
              label="Email"
            />
          </div>

          <div className="">
            <button
              className={styles['sign-up-button']}
              onClick={handleLocalSubmit}
            >
              Sent Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default forgetPassword;
