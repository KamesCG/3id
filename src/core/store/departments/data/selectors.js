/* --- Global Dependencies --- */
import _ from 'lodash'

/* --- Initial State --- */
export const initialState = {}

/* --- Select4ors --- */
export const all = (state) => state
export const get = (state,delta) => (state[delta] && state[delta]) || null
export const input = (state,delta) => (state[delta] && state[delta].input) || null
export const output = (state,delta) => (state[delta] && state[delta].output) || null
export const key = (state,delta, key) => (state[delta] && state[delta][key]) || null
export const type = (state, type) => _.filter(state, item => item.startsWith(type))