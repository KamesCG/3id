import twilioactions from './departments/twilio/actions'
import stripeactions from './departments/stripe/actions'
import entityactions from './departments/entity/actions'
import cartactions from './departments/cart/actions'

export const twilio = twilioactions
export const stripe = stripeactions
export const entity = entityactions
export const cart = cartactions

export default {
  entity,
  twilio,
  stripe,
  cart
}