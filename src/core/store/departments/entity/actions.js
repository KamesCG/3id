
/* --- Local Dependencies --- */
import {
  actionData,
  createRequestTypes,
} from "store/departments/utils";

/* ------ Constants ------ */
export const department = 'twilio';

/* ------ Define Actions ------ */
const actions = {
  USER_LIST: createRequestTypes('USER_LIST'),
  userList: status => (data) => actionData(actions.USER_LIST[status], data, status, department),
}

export default actions