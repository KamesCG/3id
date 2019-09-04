/* --- Global Dependencies --- */
import React from 'react'
import { Link } from '@reach/router'
import Icons, { IoIosLogOut, IoIosHome, IoIosSettings } from 'react-icons/io';
import { ArrowContainer } from 'react-tiny-popover'

/* --- Local Dependencies --- */
import {
  BackgroundGradient,
  Avatar, Box, Button, Flex, Heading, Image, Span } from 'atoms'
import { Popover } from 'components'
/* ------------------------------- Component -------------------------------- */
export default ({ avatar, account, authLogin, authLogout, isLoggedIn, styled,}) =>
isLoggedIn
? avatar
  ? <Avatar src={account.photoURL} boxShadow={0} width={37.5} />
  : <Flex align='center' color='blue' {...styled}>
    <Flex align='flex-end' column mr='8px'>
      <Span fontSize={[1,1,2]} >{account.displayName}</Span>
    </Flex>
    <Popover content={<ProfilePopover account={account} authLogout={authLogout}/>} >
      <Avatar src={account.photoURL} boxShadow={0} ml={10} width={37.5} />
    </Popover>
  </Flex>
: <Button onClick={authLogin} {...styled}>Login</Button>

const ProfilePopover = ({ account, authLogout }) =>
<Box bg='white'>
  <Box bg='#0b59be' color='white' boxShadow={1} py={30} p={20}>
    <Flex alignCenter>
      <Box>
        <Avatar src={account.photoURL} boxShadow={0} ml={10} width={40} />
      </Box>
      <Flex column ml='8px'>
        <Span fontSize={[2,2,3]} >{account.displayName}</Span>
        <Span fontSize={[1,1,2]} >{account.role || 'Manager'}</Span>
      </Flex>
    </Flex>
  </Box>
  <Flex column p={20}>
    <Link to='/dashboard/account'>
      <AccountMenuItem label='Account' icon={<IoIosHome size={'1em'}/>}/>
    </Link>
    <Link to='/dashboard/account/settings'>
      <AccountMenuItem label='Settings' icon={<IoIosSettings size={'1em'}/>}/>
    </Link>
    <Flex alignCenter>
      <IoIosLogOut size={'1em'}/>
      <Span pointer onClick={authLogout} fontSize={[2]} ml={10}>Logout</Span>
    </Flex>
  </Flex>
</Box>

const AccountMenuItem = ({ to, label, icon, authLogout }) =>
<Flex alignCenter onClick={authLogout} mb={15}>
  {icon}
  <Span onClick={authLogout} fontSize={[2]} ml={10}>{label}</Span>
</Flex>