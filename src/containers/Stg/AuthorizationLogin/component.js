/* --- Global Dependencies --- */
import React from 'react'

/* --- Local Dependencies --- */
import { Avatar, Button, Flex, Span } from 'atoms'
/* ------------------------------- Component -------------------------------- */
export default ({ account, authLogin, isLoggedIn, styled, styledButton}) =>
isLoggedIn
? <Flex align='center' color='blue' {...styled}>
    <Flex align='flex-end' column mr='8px'>
      <Span fontSize={[1,1,2]} >{account.displayName}</Span>
      <Span fontSize={[0,0,1]} fontWeight={700} >{account.email}</Span>
    </Flex>
    <Avatar src={account.photoURL} boxShadow={0} width={37.5} />
  </Flex>
: <Button onClick={authLogin} {...styledButton}>Login</Button>
