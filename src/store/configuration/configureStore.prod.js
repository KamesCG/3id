/* --- Global Dependencies --- */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/* --- Local Dependencies --- */
import middlewares from '../departments/middlewares'
import rootReducer from '../departments/reducer'
import sagas from '../departments/sagas'

/* ---------------------------- Module Package ------------------------------ */
const configureStore = (initialState, services = {}) => {
  // Redux Configuration
  initialState = {}
  const middleware = [];
  const enhancers = [];

  middleware.push(...middlewares);

  // Redux DevTools Configuration
  const actionCreators = {};

  // Initalize Sagas
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = compose(...enhancers);

  // Create Store
  // Redux Persister
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['box', 'database', 'dialog', 'ipfs', 'ethers', 'form', 'routing', 'tokens', 'popover']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store)
  sagaMiddleware.run(sagas)


  return { store, persistor }
}

export default { configureStore }
