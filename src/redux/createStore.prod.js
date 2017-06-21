
import { createStore, compose, applyMiddleware } from 'redux';

import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';

export default (rootReducer) => {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      autoRehydrate()
    )
  );

  persistStore(store);

  return store;
};
