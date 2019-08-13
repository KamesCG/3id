/* --- Global Dependencies --- */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

/* --- Local Dependencies --- */
import { MainWrapper } from "../layoutComponents"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <MainWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </MainWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
