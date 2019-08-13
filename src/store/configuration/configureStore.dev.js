/* --- Global Dependencies --- */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';

// Persist the Redux store for development to minimize Firebase database requests.
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/* --- Local Dependencies --- */
import middlewares from '../departments/middlewares'
import rootReducer from '../departments/reducer'
import sagas from '../departments/sagas'

console.log(rootReducer, 'rootReducer')
const configureStore = (initialState, services = {}) => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  middleware.push(...middlewares);

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Redux DevTools Configuration
  const actionCreators = {};

   // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  initialState = {}
  
  // Redux Persister
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['box', 'database', 'dialog', 'ipfs', 'ethers', 'form', 'routing', 'popover']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store)

  // Run Sagas after Store has been initialized 
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('../departments/reducer', () => {
      const nextReducer = require('../departments/reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('../departments/sagas', () => {
      const nextSagas = require('../departments/sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        // sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  // return store // Uncomment to disable Redux persist
  return { store, persistor }
}

export default configureStore
