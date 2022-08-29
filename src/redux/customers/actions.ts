// import { newRequest } from '../../helpers/common';
import type { ReduxInterface } from '@/helper/common.js';

import { newRequest } from '../../helper/common';
import * as actionType from './types';
import { urls } from './urls';

export function getCustomers(queryParams: string = '') {
  const requestObject: ReduxInterface = {
    method: 'GET',
    url: urls.getCustomers(queryParams),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  };

  return {
    type: actionType.GET_CUSTOMERS,
    payload: newRequest(requestObject),
  };
}

export function addCustomer(data: object) {
  const requestObject: ReduxInterface = {
    method: 'POST',
    url: urls.addCustomer(),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    data,
  };

  return {
    type: actionType.ADD_CUSTOMER,
    payload: newRequest(requestObject),
  };
}

export function editCustomer(data: object, id: string) {
  const requestObject: ReduxInterface = {
    method: 'PUT',
    url: urls.editCustomer(id),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
    data,
  };

  return {
    type: actionType.EDIT_CUSTOMER,
    payload: newRequest(requestObject),
  };
}

export function deleteCustomer(id: string) {
  const requestObject: ReduxInterface = {
    method: 'DELETE',
    url: urls.deleteCustomer(id),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': 'application/json',
    },
  };

  return {
    type: actionType.DELETE_CUSTOMER,
    payload: newRequest(requestObject),
  };
}
