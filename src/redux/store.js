import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './reducer';

const middleWares = [reduxThunk];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(logger);
}

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleWares))
);
export default store;
