/* --- Global Dependencies --- */
import React from 'react'
import { Heading, HorizontalRule, Flex } from 'atoms'

import { DashboardCredentialsUnclaimed } from 'containers'

export default props =>
<Flex column>
  <Heading fontSize={[3]}>
    Dashboard
  </Heading>
  <HorizontalRule my={20}/>
  <Flex between>
    <DashboardCredentialsUnclaimed/>
    <DashboardCredentialsUnclaimed/>
    <DashboardCredentialsUnclaimed/>
    <DashboardCredentialsUnclaimed/>
  </Flex>
</Flex>