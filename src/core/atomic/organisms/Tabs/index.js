/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Tab, Tabs, TabPanel } from 'react-tabs';
import TabList from '../TabList'
import "react-tabs/style/react-tabs.css";

export default ({ tabs, ...styled}) => (
  <Tabs>
    <TabList default {...styled}> 
      {
        tabs && tabs.map(tab => <Tab>{tab.label}</Tab>)
      }
    </TabList>
    
    {
      tabs && tabs.map(tab => <TabPanel>{tab.content}</TabPanel>)
    }
  </Tabs>
);