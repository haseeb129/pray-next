import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import customers from './customers/reducer';

const reducer = (state = { tick: 'init' }, action: any = {}) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action?.payload };

    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return state;
  }
};

const allReducers = combineReducers({ reducer, customers });

export default allReducers;
