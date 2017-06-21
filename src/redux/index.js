
import { combineReducers, createStore } from 'redux';

import message from './reducers/message';
import messageQueue from './reducers/messageQueue';

const rootReducer = combineReducers({
  message,
  messageQueue
});

const store = createStore(rootReducer);

export default store;
