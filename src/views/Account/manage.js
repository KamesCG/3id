import React from "react"
import { Link, Router } from '@reach/router'

import Billing from './billing'
import Projects from './projects'
import Overview from './overview'
import {
  BackgroundImage, BackgroundGradient, HorizontalRule,
  Box, Flex, Image, Heading, Paragraph, Span
} from 'atoms'
import { bgDots, bgShadow } from 'assets/images' 
import { SEO } from "components"
import { Container } from "atoms"
import { AccountProfile } from 'containers'
import { MenuAccountManagement } from 'views'
import { FormPaymentAdd } from 'forms'

const SecondPage = () =>
<>
  <SEO title="Account Management" />
  <Container py={[40]} width={[1,1,1, 1320]}>
    <Flex>
      <Box width={[1,1,0.25]}>
        <Flex column>
          <AccountProfile/>
          <MenuAccountManagement/>
        </Flex>
      </Box>
      <Box width={[1,1,0.75]} ml={30}>
          <Router>
            <Overview path='/'/>
            <Billing path='/billing'/>
            <Projects path='/projects'/>
          </Router>
      </Box>
    </Flex>
  </Container>
</>

const Account = props =>
<Flex column card height={500}>
  <Heading fontSize={[3]}>
    Account
  </Heading>
  <HorizontalRule dash/>
</Flex>



const Hero = props =>
<Flex center column color='white' py={[60, 100, 220]}>
  <BackgroundGradient gradient='blue'/>
  <BackgroundImage src={bgShadow} opacity={1} ratio={0.35} />
  <BackgroundImage src={bgDots} opacity={0.7} ratio={0.35} />
  <Heading  fontSize={[4,4,5]} fontWeight={300}>
    Searching for affordable customer lead generation?
  </Heading>
  <Paragraph fontSize={[3]} textAlign='center' fontWeight={300}>
    Horizin will deploy and manage online marketing campaigns<br/>built to drive customers directly to your phone.
  </Paragraph>
</Flex>

export default SecondPage