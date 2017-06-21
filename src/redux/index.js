
import { combineReducers, createStore, compose } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';

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
    autoRehydrate(),
    DevTools.instrument()
  )
);

persistStore(store);

export default store;
