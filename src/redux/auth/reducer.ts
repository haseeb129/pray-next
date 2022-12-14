import * as actionTypes from './types';

const initialState: { userInfo: {}; loading: boolean } = {
  userInfo: {},
  loading: false,
};

export default function reducer(state = initialState, action: any = {}) {
  switch (action?.type) {
    case actionTypes.USER_LOGIN_PENDING:
      return { ...state };
    case actionTypes.USER_LOGIN_FULFILLED:
      localStorage.setItem(
        'accessToken',
        action?.payload?.data?.result.accessToken
      );
      return { ...state, userInfo: action?.payload?.data?.result };

    case actionTypes.USER_SIGNUP_PENDING:
      return { ...state };
    case actionTypes.USER_SIGNUP_FULFILLED:
      localStorage.setItem(
        'accessToken',
        action?.payload?.data?.result.accessToken
      );
      return { ...state, userInfo: action?.payload?.data?.result };

    case actionTypes.USER_FORGET_PASSWORD_PENDING:
      return { ...state, loading: true };
    case actionTypes.USER_FORGET_PASSWORD_FULFILLED:
      return {
        ...state,
        userInfo: action?.payload?.data?.result,
        loading: false,
      };

    default:
      return state;
  }
}
