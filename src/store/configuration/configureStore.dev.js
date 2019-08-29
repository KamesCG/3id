/* --- Global Dependencies --- */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';

/* --- Local Dependencies --- */
import middlewares from '../departments/middlewares'
import rootReducer from '../departments/reducer'
import sagas from '../departments/sagas'

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
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionCreators})
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  initialState = {}
  
  const store = createStore(rootReducer, initialState, enhancer);
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

  return { store } // Uncomment to disable Redux persist
  // return { store }
}

export default configureStore
