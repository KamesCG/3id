import Cookies from 'js-cookie'

export const ClientAuthorize = (Client, settings) =>
Client.setHeaders({
  authorization: `Bearer ${Cookies.get('accessToken')}`,
  ...settings
})