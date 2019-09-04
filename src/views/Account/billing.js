import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import { FormPaymentAdd } from 'forms'
import { Box, Container, Flex, Heading, Paragraph, Span } from 'atoms'
import { AccountOverview, BillingPaymentSources } from 'containers'

export default () => (
  <Tabs>
    <TabList>
      <Tab>Overview</Tab>
      <Tab>Edit</Tab>
      <Tab>Add Card</Tab>
      <Tab>Add Bank</Tab>
    </TabList>

    <TabPanel>
      <Box pt={25}>
        <AccountOverview/>
        <BillingPaymentSources styled={{mt: 25}}/>
      </Box>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <FormPaymentAdd/>
    </TabPanel>
    <TabPanel>
      <FormPaymentAdd/>
    </TabPanel>
  </Tabs>
);