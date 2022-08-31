// import { newRequest } from '../../helpers/common';
import type { ReduxInterface } from '@/helper/common.js';

import { newRequest } from '../../helper/common';
import * as actionType from './types';
import { urls } from './urls';

export function userLogin(data: object) {
  const requestObject: ReduxInterface = {
    method: 'POST',
    url: urls.userLogin(),
    data,
  };
  return {
    type: actionType.USER_LOGIN,
    payload: newRequest(requestObject),
  };
}

export function userSignUp(data: object) {
  const requestObject: ReduxInterface = {
    method: 'POST',
    url: urls.userSignup(),
    data,
  };

  return {
    type: actionType.USER_SIGNUP,
    payload: newRequest(requestObject),
  };
}

export function forgetPassword(data: object) {
  const requestObject: ReduxInterface = {
    method: 'POST',
    url: urls.forgetPassword(),
    data,
  };

  return {
    type: actionType.USER_FORGET_PASSWORD,
    payload: newRequest(requestObject),
  };
}
