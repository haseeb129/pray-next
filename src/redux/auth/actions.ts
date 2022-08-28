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
    method: 'GET',
    url: urls.userSignup(),
    data,
  };

  return {
    type: actionType.USER_SIGNUP,
    payload: newRequest(requestObject),
  };
}

// export function forgetPassword(queryParams: string) {
//   const requestObject: ReduxInterface = {
//     method: 'GET',
//     url: urls.getCustomers(queryParams),
//   };

//   return {
//     type: actionType.GET_CUSTOMERS,
//     payload: newRequest(requestObject),
//   };
// }
