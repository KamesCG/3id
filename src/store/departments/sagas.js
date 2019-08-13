import { all } from 'redux-saga/effects';

import data from './data/sagas'
export default function* rootSaga() {
  yield all([
    data()
  ]);
}