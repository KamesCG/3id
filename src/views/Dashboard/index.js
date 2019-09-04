/* --- Global Dependencies --- */
import React from 'react'
import { Box, Flex } from 'atoms'
import { SortableTree } from 'components'

export default props =>
<Flex column height='100%'>
  <Box height='100%' p={30}>
    <SortableTree/>
  </Box>
</Flex>