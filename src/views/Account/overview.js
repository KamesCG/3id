import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Box, Container, Flex, Heading, Paragraph, Span } from 'atoms'

export default () => (
  <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Edit</Tab>
    </TabList>

    <TabPanel>
      <Box pt={25}>
        Active
      </Box>
    </TabPanel>
    <TabPanel>
      <h2>Complete</h2>
    </TabPanel>
  </Tabs>
);