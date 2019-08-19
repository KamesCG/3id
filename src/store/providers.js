/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/* --- Global Dependencies --- */
import React from "react"
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

/* --- Local Dependencies --- */
import { CookieManagement } from 'containers'
import Web3Provider from 'contexts/Providers/Web3Wrapper'
import themeSettings from 'theme/settings.js'

// Constants
import configureStore from 'store/configuration'
/* --- Configuration --- */
const { store, persistor } = configureStore();


/* ------ Component ------ */
export default ({ element }) =>
<CookiesProvider>
  <CookieManagement>
    <Provider store={store}>
          <ThemeProvider theme={themeSettings}>
            <Web3Provider>
              {element}
            </Web3Provider>
        </ThemeProvider>
    </Provider>
  </CookieManagement>
</CookiesProvider>