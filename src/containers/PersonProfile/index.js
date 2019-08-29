/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'

/* --- Local Dependencies --- */
import { boxIcon } from 'assets/images'
import { avatarBlue } from 'assets/icons'
import { Absolute, Avatar, Box, ButtonFlat, Flex, Heading, Image, Span } from 'atoms'
import { Panel } from 'components'
const { profileGraphQL, getProfile, getProfiles, getVerifiedAccounts } = require('3box/lib/api')

/* --- React Component --- */
class PersonProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile: undefined,
      isLoading: true
    }
  }
  
  // Mounted
  async componentDidMount()
  {
    const profile = await getProfile(this.props.address)
    this.setState({
      profile,
      isLoading: false
    })
  }
  // Updated
  componentDidUpdate()
  {
    console.log(this.state)
  }

  // Error Catched
  componentDidCatch() {
    
  }


  render(){
    let { address } = this.props
    let { isLoading, profile } = this.state
    return(
      isLoading ? null :
      <Flex alignCenter between borderBottom='1px solid' borderColor='gray' py={15}>
        <Flex>
          <Box>
            <ProfileImage image={profile.image} />
            {/* <Avatar src={IPFSFile(idx(profile, _=>_.image[0].contentUrl['/']))}/> */}
            <Absolute top={-6} left={-6}>
              <a target='_blank' href={`https://www.3box.io/${address}`}>
                <Image src={boxIcon} borderRadius={9999} width={18}/>
              </a>
            </Absolute>
          </Box>
          <Box ml={10}>
            <Heading fontSize={[3]}>
              {profile.name}
            </Heading>
            <Job job={profile.job} employer={profile.employer}/>
              
          </Box>
        </Flex>
        <Box>
          <Panel modal={<div>Issue</div>}>
            <ButtonFlat sm palette='green'>Issue</ButtonFlat>
          </Panel>
          <Panel modal={<Profile address={address} {...profile}/>}>
            <ButtonFlat sm ml={15}>Profile</ButtonFlat>
          </Panel>
        </Box>
      </Flex>
    )
  }
}

const ProfileImage = ({ image }) =>
idx(image, _=>_[0].contentUrl['/'])
? <Avatar src={IPFSFile(idx(image, _=>_[0].contentUrl['/']))}/>
: <Avatar src={avatarBlue}  />

const Job = ({ job, employer, styled}) =>
job && employer
? <Heading fontSize={[1]} {...styled}>
    <Span fontWeight={300} >{job} @</Span> {employer}
  </Heading>
: job || employer
  ? job ? <Span fontSize={[1]} fontWeight={300} >Role: {job}</Span> : <Span fontSize={[1]} fontWeight={300} >Employer: {employer}</Span>
  : null



const IPFSFile = hash => `https://ipfs.io/ipfs/${hash}`

const Profile = ({ address, name, image, coverImage, job, employer }) =>
<Box>

  <Flex alignCenter borderBottom='2px solid' borderColor='gray' pb={15}>
    <Box>
      <Avatar src={IPFSFile(idx(image, _=>_[0].contentUrl['/']))}/>
      <Absolute top={-6} right={-6}>
        <a target='_blank' href={`https://www.3box.io/${address}`}>
          <Image src={boxIcon} borderRadius={9999} width={18}/>
        </a>
      </Absolute>
    </Box>
    <Box ml={20}>
      <Heading fontSize={[4,4,5]}>
        {name}
      </Heading>
      <Job job={job} employer={employer} styled={{fontSize: 2}}/>
        
    </Box>
  </Flex>

</Box>

export default PersonProfile

