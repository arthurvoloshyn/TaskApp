import { createStore, compose, applyMiddleware } from 'redux';
import { save } from 'redux-localstorage-simple';

import rootReducer from '../reducers';

/* eslint-disable no-underscore-dangle, @typescript-eslint/explicit-function-return-type */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState: any) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(save({ namespace: 'task-app' }))),
  );
/* eslint-enable */

const store = configureStore({});

export default store;
