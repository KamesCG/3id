/* --- Global Dependencies --- */
import React from 'react'
import { ToastContainer } from 'react-toastify';

/* --- Local Dependencies --- */
import { LayoutContext } from 'context/Providers/LayoutWrapper'
import IssuerRoutes from 'routes/issuers'
import Issuers from 'layout/Issuers'

/* ------ Component ------ */
export default props =>
<>
  <LayoutContext.Consumer>
  {layout => (
    <Issuers layout={layout}>
      <IssuerRoutes/>
    </Issuers>
    )}
  </LayoutContext.Consumer>
  <ToastContainer/>
</>
