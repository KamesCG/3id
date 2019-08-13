/* --- Global Dependencies --- */
import React from "react"
import { ThemeProvider } from 'styled-components'

/* --- Local Dependencies --- */
import themeSettings from '../theme/settings.js'

// Constants
import { configureStore } from 'store/configuration'

/* --- Configuration --- */
const { store, persistor } = configureStore();

/* ------ Component ------ */
export default ({ children }) =>
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ThemeProvider theme={themeSettings}>
        <ScrollToTop>
            {children}
        </ScrollToTop>
    </ThemeProvider>
  </PersistGate>
</Provider>