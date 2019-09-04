/* --- Global Modules --- */
import { all, put, takeEvery } from 'redux-saga/effects';

/* --- Local Dependencies --- */
import GraphQLClient from 'settings/graphql'
import { SUCCESS, FAILURE } from 'storeRedux/departments/utils';

/* --- Module Dependencies --- */
import { errorLogging } from '../logging'
import actions, {actionTypes} from './actions'

/* ------ Data Saga Functions ------ */
export function * queryRequest({payload, meta}) {
  try {

    let data = yield GraphQLClient.request(payload)
    const key = Object.keys(data)

    // // IF :: Query is an array iterate over the nested claims.
    // if(Array.isArray(data[key])) {
    //   data = data[key].map( vc => {
    //     vc.claim = JSON.parse(vc.claim)
    //     return vc
    //   })
    // } else {
      
    // }
    yield put(actions.queryRequest(SUCCESS)(data[key], meta))
  } catch (err) {
    errorLogging(err)
    yield put(actions.queryRequest(FAILURE)(err.message, meta))
  }
}

export function * mutateRequest({payload, meta}) {
  try {
    let data = yield GraphQLClient.request(payload)
    yield put(actions.mutateRequest(SUCCESS)(data, meta))
  } catch (err) {
    errorLogging(err)
    yield put(actions.mutateRequest(FAILURE)(err.message, meta))
  }
}

export default function* dataSaga() {
  yield all([
    takeEvery(actionTypes.QUERY.REQUEST, queryRequest),
    takeEvery(actionTypes.MUTATE.REQUEST, mutateRequest),
  ]);
}