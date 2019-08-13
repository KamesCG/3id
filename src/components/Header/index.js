/* --- Global Dependencies --- */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

/* --- Local Dependencies --- */
import { Button, Container, Flex, Heading, Span } from 'atoms'

import Login from 'containers/AuthorizationLogin'

/* --- Component --- */
const Header = ({ siteTitle, className }) => (
  <header className={className}>
    <Container>
      <Flex between align='center' >
        <Heading hoverUnderline fontSize={[1,1,2,3]} mb={0} level={1} ><Link to="/">{siteTitle}</Link></Heading>
        <Flex align='center' >
          <Span fontSize={[1,1,2]} ml={15}>
            <Link to="/identity">Identity</Link>
          </Span>
          <Span fontSize={[1,1,2]} ml={15}>
            <Link to="/token">Token</Link>
          </Span>
          <Span fontSize={[1,1,2]} ml={15}>
            <Link to="/dashboard">Dashboard</Link>
          </Span>
          <Link to="/account">
            <Button outline gradient='white' mx={15}>Account</Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  background: #4d65b3;
  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);
  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);
  box-shadow: 0 1px 3px rgba(245, 243, 243, 0.15), 0 1px 2px rgba(0,0,0,0.35);
  color: #FFF;
  padding: 1rem 0;
`

export default StyledHeader
