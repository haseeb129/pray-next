import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import allReducers from './reducer';

const middlewares: any[] = [thunk];

const makeStore = () =>
  createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

export const wrapper = createWrapper(makeStore, { debug: false });
