/* --- Global Dependencies --- */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Flex, Span, Heading } from 'atoms'
import { Link } from 'molecules'
const Layout = ({ children }) =>{
  try {
    return <StaticQuery
    query={graphql`
    {
      allStrapiDocumentation {
        edges {
          node {
            id
            alias
            title
            tagline
            content
          }
        }
      }
    }
    `}
    render={data => (
      <Flex column>
        {data.allStrapiDocumentation.edges.map(({ node }) =>
          <Link to={`/documentation/${node.alias}`}>
            <Heading><Span>{node.title}</Span></Heading>
          </Link>
        )}
      </Flex>
    )}
  />
  } catch (error) {
    return null
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
