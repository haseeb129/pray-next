import { withRouter } from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForgetPassword from '@/components/auth/forgetPassword';
import SignIn from '@/components/auth/signIn';
import SignUp from '@/components/auth/signUp';
import { componentNames } from '@/helper/auth';

class Customers extends Component {
  onSignInUser = (data) => {};

  onSignUpUser = (data) => {};

  onForgetPassword = (data) => {};

  selectComponent = () => {
    const { componentName } = this.props;

    switch (componentName) {
      case componentNames.SIGNIN:
        return <SignIn onSignInUser={this.onSignInUser} />;
      case componentNames.SIGNUP:
        return <SignUp onSignUpUser={this.onSignUpUser} />;

      case componentNames.FORGET_PASSWORD:
        return <ForgetPassword onForgetPassword={this.onForgetPassword} />;
    }
  };

  render(): React.ReactNode {
    return <>{this.selectComponent()}</>;
  }
}

const mapStateToProps = ({ customers }: any) => {
  return {
    customers,
  };
};

// const mapDispatchToProps = {
//   getCustomers,
// };

export default connect(mapStateToProps, null)(withRouter(Customers));
