export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export function createRequestTypes (base) {
  const res = {}
  const types = [REQUEST, SUCCESS, FAILURE]
  types.forEach((type) => {
    res[type] = `${base}_${type}`
  })
  return res
}

export function action (type, payload = {}, meta={}, batch, entity) {
  return {
    type, 
    payload,
    meta,
    batch,
    entity,
  }
}

export function actionData (type, data, batch, entity) {
  const { payload, meta } = data
  return {
    type, 
    payload,
    meta,
    batch,
    entity,
  }
}
