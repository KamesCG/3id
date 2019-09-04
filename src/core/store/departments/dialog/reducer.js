import { initialState } from './selectors'
import { DIALOG_OPEN, DIALOG_CLOSE } from './actions'

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case DIALOG_OPEN:
      return {
        title: payload.title,
        open: true,
        component: payload.component,
        ...payload
      }
    case DIALOG_CLOSE:
      return {
        initialState
      }
    default:
      return state
  }
}
