/* --- Global Dependencies --- */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

/* --- Local Dependencies --- */
import middlewares from '../departments/middlewares'
import rootReducer from '../departments/reducer'
import sagas from '../departments/sagas'

/* ---------------------------- Module Package ------------------------------ */
const configureStore = (initialState, services = {}) => {
  initialState = {}
  const middleware = [];
  const enhancers = [];

  middleware.push(...middlewares);

  // Initalize Sagas
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = compose(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(sagas)


  return { store }
}

export default configureStore
