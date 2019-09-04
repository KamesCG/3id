/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Router } from '@reach/router'
import { connect } from 'react-redux';
import { Tab, Tabs, TabPanel } from 'react-tabs';

/* --- Local Dependencies --- */
import { fromDatabase } from 'store/selectors'
import { databaseReadRequest, databaseWriteRequest } from 'store/departments/actions'
import {
  Avatar, BackgroundGradient,
  Box, Flex, Heading, HorizontalRule, Span
} from 'atoms'
import { TabList } from 'organisms'
import { FormAccountEdit } from 'forms'
/* --- Component --- */
class AccountDashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      avatar: 'https://lh6.googleusercontent.com/-wRQPhkOC_I0/AAAAAAAAAAI/AAAAAAAAAEA/4zIMMFoSjH4/photo.jpg',
      displayName: 'Kames',
      email: 'info@kamescg.com'
    }
  }
  
  // Mounted
  componentDidMount()
  {

  }
  // Updated
  componentDidUpdate()
  {

  }

  // Catch Error
  componentDidCatch()
  {

  }


  render(){
    const { displayName, email, avatar } = this.state
    return <>
      <Profile {...this.state} />
      <Router>
        <Account path='/'/>
        <SettingTabs path='/settings'/>
      </Router>
            
            {/* <ProfileInformation /> */}
          </>
  }
}

/* -- Global State -- */
const mapStateToProps = (state, props) => ({
  // write: fromDatabase.get(state,  ''),
});


const mapDispatchToProps = (dispatch, props) => ({
  save: (campaign)=>dispatch(databaseWriteRequest({
    payload: campaign,
    metadata: {
      branch: [],
      delta: '',
      writeType: 'create',
    } 
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountDashboard)

const Account = props =>
<>
  <ProfileTabs/>
</>

const Settings = props =>
<>
  <h4>Settings</h4>
</>

const Profile = ({ avatar, displayName, email}) =>
<Box p={50} pb={190}>
  <BackgroundGradient gradient='blue'/>
  {/* Header Area */}
  <Flex between>
    <Flex alignCenter>
      <Box>
        <Avatar src={avatar} width={80}/>
      </Box>
      <Box ml={20}>
        <Heading color='white' fontSize={[4,4,5]}>
          {displayName}
        </Heading>
        <Span color='white' fontSize={[2]}>	{email}</Span>
      </Box>
    </Flex>

    <Flex>
    <Flex center column>
        <Span color='white' fontSize={[5]}>2</Span>
        <Span color='white' fontSize={[1]}>Credentials</Span>
      </Flex>
      <Flex center column mx={25}>
        <Span color='white' fontSize={[5]}>6</Span>
        <Span color='white' fontSize={[1]}>MESH</Span>
      </Flex>
      <Flex center column>
        <Span color='white' fontSize={[5]}>6</Span>
        <Span color='white' fontSize={[1]}>Services</Span>
      </Flex>
    </Flex>
  </Flex>
</Box>


const ProfileTabs = props =>
<Box mt={-120} px={[40, 50]}>
  <Tabs className='tabs simple'>
    <Box mb={40}>
      <TabList color='white'>
        <Tab>Overview</Tab>
        <Tab>Timeline</Tab>
        <Tab>Photos</Tab>
        <Tab>Connections</Tab>
      </TabList>
    </Box>
  
    <TabPanel>
  
      <ProfileInformation />
  
    </TabPanel>
    <TabPanel>
  
    </TabPanel>
    <TabPanel>
  
    </TabPanel>
    <TabPanel>
  
    </TabPanel>
  </Tabs>
</Box>

const ProfileInformationTabs= props =>
<Tabs className='tabs simple'>
  <Flex alignCenter between borderBottom='2px solid' borderColor='gray' mb={20} pb={15}>
    <Heading level={5} fontSize={[3]} slim>About</Heading>
    <TabList className='white'>
      <Tab>Overview</Tab>
      <Tab>Work</Tab>
      <Tab>Education</Tab>
    </TabList>
  </Flex>

  <TabPanel>
    <h3>Overview</h3>
    <p>In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.</p>
  </TabPanel>
  <TabPanel>
    <h3>Work</h3>
    <p>In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.</p>
  </TabPanel>
  <TabPanel>
    <h3>Education</h3>
    <p>In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.</p>
  </TabPanel>
  <TabPanel>

  </TabPanel>
</Tabs>

const ProfileInformation = props =>
<Flex>
  <Box flex={6}>
    
    <Box card>
      <ProfileInformationTabs/>
    </Box>
    <HorizontalRule my={20}/>
    <Box card>
    <h3>Biography</h3>
    <p>In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.In gravida tristique consectetur. Sed non purus maximus, rutrum mauris vitae, varius tortor. Nulla pellentesque ac sem ut ornare. Nulla maximus velit sed nisi malesuada viverra. Morbi in maximus purus, et dapibus massa.</p>
    </Box>
  </Box>
  <Box flex={3} ml={35}>
    <Box card>
      <Heading level={5} fontSize={[3]}>Contact</Heading>
      <Flex mt={15}>
        <Span fontSize={[4]} mr={20}>📬</Span>
        <Span fontWeight={700}>
          mail<br/>
          <Span fontWeight={300}>	info@kamescg.com</Span>
        </Span>
      </Flex>
      <Flex mt={15}>
        <Span fontSize={[4]} mr={20}>📞</Span>
        <Span fontWeight={700}>
          phone<br/>
          <Span fontWeight={300}>415 5555-1234</Span>
        </Span>
      </Flex>

    </Box>
  </Box>
</Flex>



const SettingTabs = props =>
<Box mt={-120} px={[40, 50]}>
  <Tabs className='tabs simple'>
    <Box mb={40}>
      <TabList color='white'>
        <Tab>General</Tab>
        <Tab>Billing</Tab>
        <Tab>Notifications</Tab>
        <Tab>Projects</Tab>
      </TabList>
    </Box>
  
    <TabPanel>
      <Flex>
        <AccountCard label='Personal'>
          <FormAccountEdit/>
        </AccountCard>
        <Box flex={2}>
          
        </Box>
      </Flex>
  
    </TabPanel>
    <TabPanel>
  
    </TabPanel>
    <TabPanel>
  
    </TabPanel>
    <TabPanel>
  
    </TabPanel>
  </Tabs>
</Box>


const AccountCard = ({ label, children, styled }) =>
<Box card mt={20} {...styled} flex={6}>
  <Flex alignCenter between borderBottom='2px solid' borderColor='gray' mb={20} pb={15}>
    <Heading level={5} fontSize={[3]} slim>{label}</Heading>
  </Flex>
  {children}
</Box>