/* --- Global Dependencies --- */
import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux';

/* --- Local Dependencies --- */
const reducers = {}

/*-* Index Child Folders *-*/
const req = require.context('.', true, /\.\/.+\/reducer\.js$/)
req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key).default
})

/*-* Combine All Reducers *-*/
const rootReducer = combineReducers(reducers);
export default rootReducer;


