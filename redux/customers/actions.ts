// import { newRequest } from '../../helpers/common';
import * as actionType from './types.js';
import { urls } from './urls';

interface ReduxInterface {
  method: string;
  url: string;
  headers?: any;
}

export function getCustomers(queryParams: string) {
  const requestObject: ReduxInterface = {
    method: 'GET',
    url: urls.getCustomers(queryParams),
    // headers: {
    //   Authorization: "Bearer " + window.accessToken,
    // },
  };

  return {
    type: actionType.GET_CUSTOMERS,
    payload: requestObject,
  };
}
