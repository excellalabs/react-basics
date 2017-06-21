
import { combineReducers } from 'redux';
import message from './reducers/message';
import messageQueue from './reducers/messageQueue';

const prod = process.env.NODE_ENV === 'production';

const createStore = prod
  ? require('./createStore.prod').default
  : require('./createStore.dev').default;

const rootReducer = combineReducers({
  message,
  messageQueue
});

const store = createStore(rootReducer);

export default store;
