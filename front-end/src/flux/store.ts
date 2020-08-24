import { createStore, applyMiddleware, compose } from 'redux';
import * as thunk from 'redux-thunk';
import { rootReducer } from './reducers';

console.log(rootReducer);

const initialState = {};

const middleWare: any = [thunk];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
