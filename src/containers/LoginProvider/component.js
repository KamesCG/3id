/* --- Global Dependencies --- */
import React from 'react'
import Icons, { IoIosLogOut, IoIosHome, IoIosSettings } from 'react-icons/io';

/* --- Local Dependencies --- */
import { Button } from 'atoms'
/* ------------------------------- Component -------------------------------- */
export default ({ authLogin, provider, isLoggedIn, styled }) =>
isLoggedIn
? null
: {
  google: <Button onClick={authLogin} palette='google' {...styled}>Google</Button>,
  facebook: <Button onClick={authLogin} palette='facebook' {...styled}>Facebook</Button>,
  twitter: <Button onClick={authLogin} palette='twitter' {...styled}>Twitter</Button>
}[provider || 'google']