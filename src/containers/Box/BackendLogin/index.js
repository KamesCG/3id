/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
 
/* --- Local Dependencies --- */
import { BoxConsumer } from 'context/Providers/BoxProvider'
import { loginLogo } from 'assets/images'
import { Avatar, Box, Image, Flex, Loading, Heading, Span } from 'atoms'
import { Popover } from 'components'
/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    this.props.box.open()
    this.setState({isLoading: true})
  }
  logout() {
    this.props.box.logout()
    this.setState({isLoading: false})
  }
  
  // Mounted
  componentDidMount()
  {

  }
  // Updated
  componentDidUpdate()
  {


  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    const { box, identity, styled } = this.props
    const { isLoading } = this.state
    return(
      box.profile
      ? <Flex alignCenter {...styled}>
        {
          !identity
          ? <>
              <Popover content={<ProfilePreview box={box} profile={box.profile}/>} >
                <Avatar src={loginLogo} width={40} borderRadius={9999} />
              </Popover>
              <Span
              xs pointer bg='#eb9400' color='white' borderRadius='0 5px px 0' px={10} py='5px' ml={'-10px'}
              onClick={this.login}>
                {
                  isLoading
                  ? <Span pl={10} pr={10}>Loading...</Span>
                  : <Span pl={10} pr={10}>Login</Span>
                }
                
              </Span>
            </>
          : <>
            <Popover content={<ProfilePopover box={box} profile={box.profile} logout={this.logout} />} >
              <Span pointer><Avatar src={GenerateImage(box.profile.image)} width={42}/></Span>
            </Popover>
            <Span xs bg='#eb9400' color='white' borderRadius='0 5px px 0' px={10} py='5px' ml={'-10px'}>
              <Span pl={0} pr={10}>{box.profile.name}</Span>
            </Span>
          </>
        }
        
        </Flex>
      : null
    )
  }
}

const ProfilePopover = ({ box, profile, logout }) =>
!box ? null :
<Flex card column width={300} p={0} mr={25} >
  <Flex alignCenter gradient='blue' color='white' p={20} >
    <Avatar src={GenerateImage(profile.image) }/>
    <Box ml={10}>
      <Heading md thin>{profile.name}</Heading>
      <Heading sm thin>{profile.job}</Heading>
    </Box>
  </Flex>
  <Flex column p={20}>
    <Span>Account</Span>
    <Span cursor onClick={logout} >Logout</Span>
    <Span>Threads</Span>
    <Span>Spaces</Span>
  </Flex>
</Flex>

const ProfilePreview = ({ box, profile }) =>
!box ? null :
<Flex card column width={300} p={0} mr={25} >
  <Flex alignCenter gradient='blue' color='white' p={20} >
    <Avatar src={GenerateImage(profile.image) }/>
    <Box ml={10}>
      <Heading md thin>{profile.name}</Heading>
      <Heading sm thin>{profile.job}</Heading>
    </Box>
  </Flex>
</Flex>

export default props =>
<BoxConsumer>
  <ClassComponent {...props}/>
</BoxConsumer>


const GenerateImage = image => {
  const IPFSFile = hash => `https://ipfs.io/ipfs/${hash}`
  const imageipfs = idx(image, _=>_[0].contentUrl['/'])
  ? IPFSFile(idx(image, _=>_[0].contentUrl['/']))
  : null
  return imageipfs
}