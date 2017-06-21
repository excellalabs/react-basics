
import { createStore, compose, applyMiddleware } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

import DevTools from '../containers/DevTools';

export default (rootReducer) => {
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

  return store;
};
