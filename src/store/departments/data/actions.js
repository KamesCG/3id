
/* --- Local Dependencies --- */
import {
  action,
  createRequestTypes,
} from "store/departments/utils";

/* ------ Constants ------ */
export const department = 'data';

/* ------ Define Actions ------ */
export const actionTypes = {
  QUERY: createRequestTypes('QUERY'),
  MUTATE: createRequestTypes('MUTATE'),
}

export default {
  queryRequest: status => (payload, meta) => action(actionTypes.QUERY[status], payload, meta, status, department),
  mutateRequest: status => (payload, meta) => action(actionTypes.MUTATE[status], payload, meta, status, department),
}
