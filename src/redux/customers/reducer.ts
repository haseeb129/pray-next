import * as actionTypes from './types';

const initialState: { customers: [] } = {
  customers: [],
};

export default function reducer(state = initialState, action: any = {}) {
  switch (action?.type) {
    case actionTypes.GET_CUSTOMERS_PENDING:
      return { ...state };
    case actionTypes.GET_CUSTOMERS_FULFILLED:
      return { ...state, customers: action?.payload?.data };

    default:
      return state;
  }
}
