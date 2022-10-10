import PersonPinIcon from "@mui/icons-material/PersonPin";
import Link from "next/link";
import React, { useState } from "react";

import { inputTypes } from "@/helper/common";

import CInputFiled from "../input";
import styles from "./index.module.scss";

export interface SignInStateInterfacr {
  email: string;
  password: string;
}

const signInUser = (props: any) => {
  const { onSignInUser } = props;

  const [info, setInfo] = useState<SignInStateInterfacr>({
    email: "",
    password: "",
  });

  const handleLocalSubmit = () => {
    onSignInUser(info);
  };

  const handleChange = (name: string, value: string) => {
    setInfo({ ...info, [name]: value });
  };
  return (
    <div className={styles["guest-signIn-page-wrapper"]}>
      <div className={styles["signIn-page-inner-wrapper"]}>
        {/* <div className={styles.logo}>
          <PersonPinIcon fontSize="large" />
        </div> */}

        <span className={styles["heading-top"]}>User Sign In</span>
        <div className="flex flex-col ">
          <div className="py-2">
            <CInputFiled
              type={inputTypes.EMAIL}
              handleChange={handleChange}
              value={info.email}
              name="email"
              label="Email"
              required              
            />
          </div>

          <div className="py-2">
            <CInputFiled
              type={inputTypes.PASSWORD}
              handleChange={handleChange}
              value={info.password}
              name="password"
              label="Password"
              required
              
              
            />
          
          </div>
          <div className={styles["forget-pass-wrap"]}>
            <span className={styles["forget-password"]}>
              <Link href="/auth/forgetPassword">
                <span className="sign-up-txt"> Forgot Password</span>
              </Link>
            </span>
          </div>
          <div className="">
            <button
              className={styles["sign-up-button"]}
              onClick={handleLocalSubmit}
            >
              Sign In
            </button>
          </div>

          <div>
            <p className={`${styles["forget-password"]} ${styles.signUp}`}>
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
