/* --- Global Dependencies --- */
import React from "react";
import { Link } from "@reach/router";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Box, Flex, Image } from "atoms";

import { iconBilling, iconBuilding, iconCampaign, iconDashboard, iconDirectory } from 'assets/images'

/* ------- Styled Component ------- */

const LinkStyled = styled(Link)`
  color: inherit;
  font-size: 12px;
  text-decoration: none;
`

const LinkStyledChild = styled(Link)`
  color: inherit;
  font-size: 10px;
  text-decoration: none;
  opacity: 0.75;
  padding: 10px 42.5px;
  &:hover {
    background: #1b1b28;
    opacity: 1;
  }
`

const StyledMenuItem = styled(Flex)`
  opacity: 0.75;
  &:hover {
    background: #1b1b28;
    opacity: 1;
  }
`

const MenuItem = ({ children, label, to,  icon }) =>
<Flex column>
  <StyledMenuItem align='center' py={10} px={10}>
    <Image src={icon} mr={10} width={22.5} />
    <LinkStyled to={to}>{label}</LinkStyled>
  </StyledMenuItem>
  { children && children.map( c => <LinkStyledChild to={c.to}>{c.label}</LinkStyledChild>)}
</Flex>

/* ------- Component ------- */
export default props => 
<Flex column >
  {
    Items.map( item => <MenuItem {...item}/>)
  }
</Flex>


const Items = [
  {
    icon: iconDashboard,
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Verifiable Credentials',
    icon: iconDirectory,
    to: '/dashboard/verifiable-credentials/issue'
  },
  {
    label: 'Claims Search',
    icon: iconBilling,
    to: '/dashboard/claims'
  },
  {
    label: 'People',
    icon: iconDirectory,
    to: '/dashboard/people'
  },
  {
    label: 'Role Management',
    icon: iconDirectory,
    to: '/dashboard/roles'
  },
]