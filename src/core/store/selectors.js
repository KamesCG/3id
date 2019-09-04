import { fromTwilio, fromStripe, fromDatabase, fromOrders } from 'store/departments/selectors'

export const database = fromDatabase

export default {
  fromDatabase,
  fromTwilio,
  fromStripe
}