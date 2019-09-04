/* --- Global Dependencies --- */
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-vis/dist/style.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-table/react-table.css'
import "react-tabs/style/react-tabs.css";
import 'react-toastify/dist/ReactToastify.css';

/* --- Local Dependencies --- */
import { LayoutContext } from 'context/Providers/LayoutWrapper'
import { Flex } from 'atoms'
import { SEO } from "components"
import { Aside, Main } from 'layout/DashboardWrapper'
import DashboardRoutes from 'routes/dashboard'
/* ------ Component ------ */
export default props =>
<>
  <SEO title="Dashboard" keywords={[`application`]} />
  <LayoutContext.Consumer>
    {layout => (
    <Flex height='100vh'>
      <Aside layout={layout}/>
      <Main>
        <DashboardRoutes/>
      </Main>
    </Flex>
    )}
  </LayoutContext.Consumer>
  <ToastContainer/>
</>