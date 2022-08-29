import type { CustomerReducer } from '@/helper/customers/helper';

import * as actionTypes from './types';

const initialState: CustomerReducer = {
  customers: {},
  loading: false,
};

export default function reducer(state = initialState, action: any = {}) {
  switch (action?.type) {
    case actionTypes.GET_CUSTOMERS_PENDING:
      return { ...state, loading: true };
    case actionTypes.GET_CUSTOMERS_FULFILLED:
      return { ...state, customers: action?.payload?.data, loading: false };
    case actionTypes.ADD_CUSTOMER_PENDING:
      return { ...state, loading: true };
    case actionTypes.ADD_CUSTOMER_FULFILLED:
      return { ...state, loading: false };

    case actionTypes.EDIT_CUSTOMER_PENDING:
      return { ...state, loading: true };
    case actionTypes.EDIT_CUSTOMER_FULFILLED:
      return { ...state, loading: false };

    case actionTypes.DELETE_CUSTOMER_PENDING:
      return { ...state, loading: true };
    case actionTypes.DELETE_CUSTOMER_FULFILLED:
      return { ...state, loading: false };

    default:
      return state;
  }
}
