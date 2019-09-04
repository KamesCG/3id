/* --- Global Dependencies --- */

/* --- Local Dependencies --- */

/* --- Module Dependencies --- */
import { department as departmentType } from './actions'
import { initialState } from './selectors'

export default (state = initialState, {type, payload, meta, batch, entity } ) => {
  if (!!(meta && meta.delta) && entity === departmentType) {
    const status = {
      REQUESTED: undefined,
      SUCCESS: true,
      FAILURE: false
    }[batch]
    return {
      ...state,
      [meta.delta]: {
        ...state[meta.delta],
        status: status,
        meta: meta,
        input: !status ? payload : state[meta.delta].input,
        output: status ? payload : null
      }
    }
  } else {
    switch (type) {

      default:
        return state
    }
  }
}