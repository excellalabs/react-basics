
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import DevTools from '../containers/DevTools';

import message from './reducers/message';
import messageQueue from './reducers/messageQueue';

const rootReducer = combineReducers({
  message,
  messageQueue
});

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
    DevTools.instrument()
  )
);

persistStore(store);

export default store;
