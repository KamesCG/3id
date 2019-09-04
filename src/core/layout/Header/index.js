/* --- Global Dependencies --- */
import React from "react"
import PropTypes from "prop-types"
import { Link } from '@reach/router'
import styled from "styled-components"

/* --- Local Dependencies --- */
import { ButtonFlat, Box, Container, Flex, Image, Heading, Span } from 'atoms'
import { AuthorizationLogin, BoxLogin, BackendLogin } from 'containers'
import { Logo } from 'layout'

/* --- Component --- */
const Header = ({ siteTitle, className }) =>
<header className={className}>
  <Flex between align='center' px={[15, 20, 40]} >
   <Flex>
      <Logo/>
      <Flex align='center' ml={20} >
        <MenuItem label='Documentation' to='/documentation'/>
        <MenuItem label='Profiles' to='/profile'/>
        <MenuItem label='Issuers' to='/issuers'/>
        <MenuItem label='Dashboard' to='/dashboard'/>
      </Flex>
   </Flex>
    <Flex>
      <BoxLogin/>
      <BackendLogin styled={{ml: 15}}/>
    </Flex>
  </Flex>
</header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  background: #FFF;
  box-shadow: 0 1px 3px rgba(245, 243, 243, 0.15), 0 1px 2px rgba(0,0,0,0.35);
  color: #3e3e3e;
  padding: 1rem 0;
`

const MenuItem = ({ label, to }) =>
<Span fontSize={[1]} mr={15}>
  <Link to={to}>
    {label}
  </Link>
</Span>

export default StyledHeader
