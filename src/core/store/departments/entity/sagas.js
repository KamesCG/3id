/* --- Global Modules --- */
import { all, call, put, select, take, takeEvery, spawn } from 'redux-saga/effects';
import { GraphQLClient } from 'graphql-request'

/* --- Local Dependencies --- */
import { SUCCESS, FAILURE } from "store/departments/utils";

/* --- Module Dependencies --- */
import { ClientAuthorize } from '../authorize'
import { errorLogging } from '../logging'
import actions from './actions'
import { userListQuery } from './mutations'
/* --- Constants --- */
const endpoint = `https://us-central1-call-lead-generation.cloudfunctions.net/database/v1`
const Client  = new GraphQLClient(endpoint)
const ClientAuthorized = ClientAuthorize(Client)

/* ------ Twilio Saga Functions ------ */
export function * userList({payload, meta}) {
  try {
    const data = yield ClientAuthorized.request(userListQuery(payload))
    yield put(
    actions.userList(SUCCESS)
    ({
      payload:data.userList,
      meta
    })
    )
  } catch (err) {
    errorLogging(err)
    yield put(actions.userList(FAILURE)(err.message, meta))
  }
}

export default function* entitySaga() {
  yield all([
    takeEvery(actions.USER_LIST.REQUEST, userList),
  ]);
}