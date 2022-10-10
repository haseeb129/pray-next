import { withRouter } from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import type { ForgetPasswordStateInterfacr } from '@/components/auth/forgetPassword';
import ForgetPassword from '@/components/auth/forgetPassword';
import type { SignInStateInterfacr } from '@/components/auth/signIn';
import SignIn from '@/components/auth/signIn';
import type { SignUpStateInterfacr } from '@/components/auth/signUp';
import SignUp from '@/components/auth/signUp';
import { componentNames } from '@/helper/auth';
import { isValidStatus } from '@/helper/common';
import { login } from '@/utils/auth';

import {
  forgetPassword,
  userLogin,
  userSignUp,
} from '../../redux/auth/actions';

class Auth extends Component {
  onSignInUser = async (data: SignInStateInterfacr) => {
    const { userLogin } = this.props;
    const response = await userLogin({
      username: data?.email,
      password: data?.password,
    });
    await login({ token: response?.value?.data?.result?.accessToken || '' });

    if (response.value && isValidStatus(response.value.status)) {
      window.location = '/admin/customers';
      toast.success('Login Success');
    } else {
      toast.error(
        response?.value?.error?.response?.data?.error?.message ||
          'Something went wrong'
      );
    }
  };

  onSignUpUser = (data: SignUpStateInterfacr) => {
    console.log('Data', data);
    // if (data.password != data.confirmPassword)
    //   return toast.error('Passwords not matched');
  };

  onForgetPassword = async (data: ForgetPasswordStateInterfacr) => {
    const { forgetPassword }: any = this.props;
    const response = await forgetPassword({
      username: data?.email,
    });
    if (response.value && isValidStatus(response.value.status)) {
      toast.success(
        response?.value?.data?.result?.message ||
          'Email sent on the given address'
      );
    } else {
      toast.error(
        response?.value?.error?.response?.data?.error?.message ||
          'Something went wrong'
      );
    }
  };

  selectComponent = () => {
    const { componentName }: any = this.props;

    switch (componentName) {
      case componentNames.SIGNIN:
        return <SignIn onSignInUser={this.onSignInUser} />;
      case componentNames.SIGNUP:
        return <SignUp onSignUpUser={this.onSignUpUser} />;

      case componentNames.FORGET_PASSWORD:
        return <ForgetPassword onForgetPassword={this.onForgetPassword} />;

      default:
        return <></>;
    }
  };

  render(): React.ReactNode {
    return <>{this.selectComponent()}</>;
  }
}

const mapStateToProps = ({ auth }: object) => {
  return {
    auth,
  };
};

const mapDispatchToProps = {
  userLogin,
  userSignUp,
  forgetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Auth));
