/* --- Global Dependencies --- */
import React from 'react'
import { Box, Heading, HorizontalRule, Flex } from 'atoms'
import {MDXProvider, mdx} from '@mdx-js/react'
import { DashboardCredentialsUnclaimed } from 'containers'
import { SortableTree } from 'components'
import Kirby from 'contexts/Providers/KirbyWrapper'


import Runtime from './runtime'
export default props =>
<Flex column height='100%'>
  <Box height='100%' p={30}>
    <SortableTree/>
  </Box>
  {/* <Flex between>
    <DashboardCredentialsUnclaimed/>
    <DashboardCredentialsUnclaimed/>
    <DashboardCredentialsUnclaimed/>
    <DashboardCredentialsUnclaimed/>
  </Flex> */}
</Flex>