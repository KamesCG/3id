/* --- Global Dependencies --- */
import React from "react";
import { Link, Router } from '@reach/router'

/* --- Local Dependencies --- */
import { badge, badgeEducation } from 'assets/icons'
import { Columns } from 'static/tables/credentials'
import menuProfile from 'static/menuProfile'
import {
  BackgroundGradient,
  Box, Flex, Heading
} from "atomic";
import { Tabs } from 'organisms'
import { MenuSidebar, TableSimple, CredentialBadge } from 'components'
import { AccountHeader, BoxSpace } from 'containers'

/* ------- Component ------- */
export default props => 
<>
<Flex column justifyCenter height={200}>
  <BackgroundGradient gradient='blue'/>
  <AccountHeader address='0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE' styled={{color: 'white', height: '100%', p: 20}}/>
</Flex>
<Box p={20} width={1}>
  <Flex width={1} >
    <Flex flex={2} >
      <Flex card column width={1} height='100%'>
        <MenuSidebar items={menuProfile} label={'Your Profile'}/>
      </Flex>
    </Flex>
    <Flex flex={10} ml={30}>
      <Box width={1}>
        <Routing/>
      </Box>
    </Flex>
  </Flex>
</Box>
</>


const Routing = props =>
<Router>
  <Account path='/'/>
  <Credentials path='/credentials'/>
  <Notifications path='/notifications'/>
  <Spaces path='/spaces'/>
  <Threads path='/threads'/>
  <Connections path='/connections'/>
  <Settings path='/settings'/>
</Router>

const Account = props =>
<>
  <h4>Account</h4>
</>
const Credentials = props =>
<>
  {/* <h4>Credentials</h4> */}
  <Tabs tabs={TabItems} styled={{ml:5}} />
</>

const TabItems = [
  {
    label: 'Access',
    content: <Box card borderBottom><TableSimple columns={Columns} /></Box>
  },
  {
    label: 'Badges',
    content: <Box card borderBottom>
      <Flex between p={30}>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
      </Flex>
      <Flex between p={30}>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
      </Flex>
      <Flex between p={30}>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
        <CredentialBadge image={badgeEducation} label='Top Quester' description='Completed highest number of quests' uri='rapid.com'/>
      </Flex>
    </Box>
  },
  {
    label: 'Education',
    content: <Box card borderBottom> </Box>
  },
  {
    label: 'Reputation',
    content: <Box card borderBottom></Box>
  },
]


const Notifications = props =>
<>
  <h4>Notifications</h4>
</>
const Spaces = props =>
<>
  <Box p={20}>
    <Flex gutter3>
      <BoxSpace image={badgeEducation} label='MeshHub' description='Manage ConsenSys Information' uri='rapid.com'/>
      <BoxSpace image={badgeEducation} label='Credentialize' description='A Central Store for Verifiable Credentials' uri='rapid.com'/>
      <BoxSpace image={badgeEducation} label='Rapid' description='Contribute to the Rapid team' uri='rapid.com'/>
    </Flex>
  </Box>
</>
const Threads = props =>
<>
  <h4>Threads</h4>
</>
const Connections = props =>
<>
  <h4>Connections</h4>
</>
const Settings = props =>
<>
  <h4>Settings</h4>
</>
