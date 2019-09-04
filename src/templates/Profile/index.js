/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { connect } from 'react-redux';
import { Router } from '@reach/router'
import { IoLogoGithub, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
/* --- Local Dependencies --- */
import menuProfile from 'static/menus/profile'
import { horizon, logoConsensys, manhattan } from 'assets/images'
import { Tabs } from 'organisms'
import { databaseReadRequest, databaseWriteRequest } from 'store/departments/actions'
import {
  Absolute, Avatar, BackgroundGradient, BackgroundImage, Container,
  Box, Flex, Heading, HorizontalRule, Span, Paragraph
} from 'atoms'
import { MenuSidebar } from 'components'
import { BadgeCard, BoxProfileCard } from 'components'
import { BoxProfileSearch } from 'containers'
import { BoxContext, BoxConsumer } from 'context/Providers/BoxProvider'
/* --- Component --- */
class ProfileTemplate extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  
  // Mounted
  componentDidMount()
  {
    console.log(this.props, 'profile template')
    this.props.box.lookupProfile(this.props.address)
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
    const { box } = this.props

    const entity = idx(box, _=>_.entities[this.props.address])
    console.log(box, entity, 'box entity')
    return <>
            {/* <Header {...this.state} /> */}
            <Box p={50} pb={[80]}>
            <BackgroundGradient gradient='blue'/>
            <BackgroundImage src={horizon} opacity={0.2} ratio={0.35} />
            {/* Header Area */}
            <Container py={[40]}>

            <Flex between>

              {/* <BoxProfileSearch> */}
              {
                entity &&
                <BoxProfileCard {...entity} />
              }
              {/* </BoxProfileSearch> */}

              <Flex center column color='white' column flex={6} pl={30} textRight>
                  <blockquote>
                    <p>Vivamus eget lorem interdum lectus faucibus tempor nec volutpat tortor. Mauris quis dui semper, aliquam lectus sit amet, venenatis tellus. Morbi vitae suscipit diam.</p>
                    <cite> - {displayName}</cite>
                  </blockquote>
                </Flex>
              </Flex>
            </Container>
          </Box>
            <Container mt={-40} width={[1]} px={[30, 60, 100]}>
            <Flex direction={['column', 'column', 'row']} width={1} >
              <Flex flex={3} >
                <Flex card column width={1} height='100%'>
                  <MenuSidebar items={menuProfile('account')} label={'Your Profile'}/>
                </Flex>
              </Flex>
              <Flex flex={10} ml={[0,0, 30]}>
                <Box width={1}>
                  {/* <Routing id={this.props.id}/> */}
                  <Tabs tabs={TabItems(this.props, this.state)} color='white' styled={{ml:5, color: 'white'}} />
                </Box>
              </Flex>
            </Flex>
            </Container>
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

const BoxWrapperProfile = props =>
<BoxContext>
  {
    box => (
      <Router>
        <ProfileTemplate path={`/profile/:address/*`} box={box}/>
      </Router>
    )
  }
</BoxContext>

export default connect(mapStateToProps, mapDispatchToProps)(BoxWrapperProfile)



const Header = ({ avatar, displayName, summary, role, employer, email, verifications}) =>
<Box p={50} pb={[80]}>
  <BackgroundGradient gradient='blue'/>
  <BackgroundImage src={horizon} opacity={0.2} ratio={0.35} />
  {/* Header Area */}
  <Container py={[40]}>

  <Flex between>

    {/* <BoxProfileSearch> */}
      <BoxProfileCard />
    {/* </BoxProfileSearch> */}

    <Flex center column color='white' column flex={6} pl={30} textRight>
        <blockquote>
          <p>Vivamus eget lorem interdum lectus faucibus tempor nec volutpat tortor. Mauris quis dui semper, aliquam lectus sit amet, venenatis tellus. Morbi vitae suscipit diam.</p>
          <cite> - {displayName}</cite>
        </blockquote>
      </Flex>
    </Flex>
  </Container>
</Box>


const TabItems = (props, state) => ([
  {
    label: 'Quests',
    content:
    <Box card borderBottom p={30}>
      <Flex gutter3 wrap m={20}>
        {
          Badges && Array.isArray(Badges) &&
          Badges.map( badge => <BadgeCard {...badge}/>)
        }
      </Flex>
    </Box>
  },
  {
    label: 'Education',
    content:
    <Box card borderBottom>

    </Box>
  },
  {
    label: 'Social',
    content:
    <Box card borderBottom>

    </Box>
  },
])

const Verification = ({ icon, label, verified}) =>
<Box textCenter>
  {icon}
  <Span xs>{label}</Span>
  {
    verified
    ? <Span color='green' xs>Verified</Span>
    : <Span color='red' xs>Unverified</Span>
  }
</Box>

const VerificationTypes = (id, verified) => ({
  github: <Verification verified={verified} label={'Github'} icon={<IoLogoGithub fontSize='1.2em'/>} />,
  facebook: <Verification verified={verified} label={'Facebook'} icon={<IoLogoFacebook fontSize='1.2em'/>} />,
  twitter: <Verification verified={verified} label={'Facebook'} icon={<IoLogoTwitter fontSize='1.2em'/>} />,
  default: <div>empty</div>
}[id || 'default'])


const Badges = [
  {
    name: 'Amazing Badge',
    tagline: 'Always Being Awesome',
    image: logoConsensys,
    uri: 'horizin.io'
  },
  {
    name: 'Prototyper',
    tagline: 'Building Something New',
    image: logoConsensys,
    uri: 'horizin.io'
  },
  {
    name: 'Adventure',
    tagline: 'Exploring New Lands',
    background: manhattan ,
    image: logoConsensys ,
    uri: 'horizin.io'
  },
  {
    name: 'Amazing Badge',
    tagline: 'Always Being Awesome',
    image: logoConsensys,
    uri: 'horizin.io'
  },
  {
    name: 'Prototyper',
    tagline: 'Building Something New',
    image: logoConsensys,
    uri: 'horizin.io'
  },
  {
    name: 'Adventure',
    tagline: 'Exploring New Lands',
    background: manhattan ,
    image: logoConsensys ,
    uri: 'horizin.io'
  },
]
const Verifications = [
  {
    id: 'github',
    verified: true,
  },
  {
    id: 'facebook',
    verified: false,
  },
  {
    id: 'twitter',
    verified: true,
  }
]

