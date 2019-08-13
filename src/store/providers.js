/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/* --- Global Dependencies --- */
import React from "react"
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

/* --- Local Dependencies --- */
import themeSettings from 'theme/settings.js'

// Constants
import configureStore from 'store/configuration'
/* --- Configuration --- */
const { store, persistor } = configureStore();


/* ------ Component ------ */
export default ({ element }) =>
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={themeSettings}>
        {element}
      </ThemeProvider>
    </PersistGate>
</Provider>
