/* --- Global Dependencies --- */
import React from "react"

/* --- Local Dependencies --- */
import { Header, Footer } from "layout"

const Layout = ({ children }) =>
<>
  <Header />
    <main>{children}</main>
  {/* <Footer /> */}
</>

export default Layout
