/* --- Global Dependencies --- */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            description
            url
            twitter
            facebook
            linkedin
          }
        }
      }
    `}
    render={data => (
      Array.isArray(children)
      ? children.map(child => React.cloneElement(child, {...data.site.siteMetadata}))
      : React.cloneElement(children, {...data.site.siteMetadata})
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
