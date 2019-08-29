/* --- Global Dependencies --- */
import React from "react"
import { Link, Router } from '@reach/router'

/* --- Local Dependencies --- */
import { research, avatarDemo, logoConsensys } from 'assets/images'
import {
  Avatar,
  BackgroundGradient, BackgroundImage,
  Box, Container, Flex, Heading, Paragraph, Span
} from 'atoms'
import { FormAccountCreate, FormLogin } from 'forms'

import Layout from "components/layout"
import SEO from "components/seo"


const Account = () =>
<Layout>
  <SEO title="Initial Token Offering" />
  <Box pt={[130]}>
    <BackgroundGradient gradient='blue'/>
    <BackgroundImage src={research} ratio={0.35}/>
    <Box gradient='blue'>
      <Container my={100} width={[1,1, 1020, 1340]}>
        <Flex justifyCenter between color='white' p={20}>
          <Flex evenly flex={1}>
            <Flex center column>
              <h5>0x696365...73ad1f</h5>
              <h6>Address</h6>
            </Flex>
            <Flex center column>
              <h5>did:eth:73ad1f</h5>
              <h6>DID</h6>
            </Flex>
          </Flex>
          <Flex center column flex={1} mt={-120}>
            <Avatar bg='white' src={avatarDemo} width={120}/>
            <h2>Kames Cox Geraghty</h2>
            <h6>Fullstack Javascript Developer</h6>
          </Flex>
          <Flex evenly flex={1}>
            <Flex center column>
              <h5>Developer</h5>
              <h6>Role</h6>
            </Flex>
            <Flex center column>
              <h5>Rapid</h5>
              <h6>Team</h6>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  </Box>

  <Container my={100} width={[1,1, 1020, 1340]}>
  <Flex>
    
    <Flex flex={1}>
      <Box card height={300} width={1}>
        <h5>Activity</h5>
        <h5>Relationships</h5>
        <h5>Services</h5>
        <h5>Permissions</h5>
      </Box>
    </Flex>

    <Flex column flex={3} mx={[50]}>
      <Box card width={1}>
        <h3>Latest Attestations</h3>
        {
          Attestations && Attestations.map( att => <Attestation {...att}/>)
        }
      </Box>
    </Flex>

  </Flex>
  </Container>
</Layout>


const Attestation = props =>
<Flex alignCenter between borderColor='gray' borderBottom='2px solid' py={[10]} width={1}>
  <Box>
    <h5>{props.type}</h5>
    <h6>{props.date}</h6>
  </Box>
  <span>Issuer: {props.iss}</span>
</Flex>

const Attestations = [
  {
    type: 'Connection',
    date: 'Feb 22',
    iss: '0x696365...AC73ad1f',
    claims: {
      name: 'PeerToPeer',
      type: 'Event'
    }
  },
  {
    type: 'Connection',
    date: 'Feb 22',
    iss: '0x696365...AC73ad1f',
    claims: {
      name: 'PeerToPeer',
      type: 'Event'
    }
  },
  {
    type: 'Connection',
    date: 'Feb 22',
    iss: '0x696365...AC73ad1f',
    claims: {
      name: 'PeerToPeer',
      type: 'Event'
    }
  },
  {
    type: 'Connection',
    date: 'Feb 22',
    iss: '0x696365...AC73ad1f',
    claims: {
      name: 'PeerToPeer',
      type: 'Event'
    }
  },
  {
    type: 'Connection',
    date: 'Feb 22',
    iss: '0x696365...AC73ad1f',
    claims: {
      name: 'PeerToPeer',
      type: 'Event'
    }
  },
]


export default Account