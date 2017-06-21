
import { combineReducers, createStore } from 'redux';

import message from './reducers/message'

const rootReducer = combineReducers({
  message
});

const store = createStore(rootReducer);

export default store;
