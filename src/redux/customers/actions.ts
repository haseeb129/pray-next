// import { newRequest } from '../../helpers/common';
import type { ReduxInterface } from '@/helper/common.js';

import { newRequest } from '../../helper/common';
import * as actionType from './types';
import { urls } from './urls';

export function getCustomers(queryParams: string) {
  const requestObject: ReduxInterface = {
    method: 'GET',
    url: urls.getCustomers(queryParams),
  };

  return {
    type: actionType.GET_CUSTOMERS,
    payload: newRequest(requestObject),
  };
}
