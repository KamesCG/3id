/* --- Global Dependencies --- */
import idx from 'idx' 
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Image } from 'atoms'

const q = ``

const ImageQuery = ({ children, name, ...props }) => (
  <StaticQuery
    query={graphql`
    {
      allFile(filter: {name: { eq: "gatsby-icon"} }) {
        edges {
          node {
            name
            publicURL
            id
            prettySize
            dir
          }
        }
      }
    }
    `}
    render={data => (
      idx(data, _=>_.allFile.edges[0].node.publicURL)
      ? <Image src={idx(data, _=>_.allFile.edges[0].node.publicURL)}/>
      : 'No Image'
    )}
  />
)

ImageQuery.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ImageQuery