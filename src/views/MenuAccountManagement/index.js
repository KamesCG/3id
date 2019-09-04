/* --- Global Dependencies --- */
import React from "react";
import { Link } from "@reach/router";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Box, Circle, Flex, Image } from "atoms";

import { iconBilling, iconBuilding, iconCampaign, iconDashboard, iconDirectory } from 'assets/images'

/* ------- Styled Component ------- */

const LinkStyled = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`

const LinkStyledChild = styled(Link)`
  background-color: #000;
  color: inherit;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  opacity: 0.75;
  padding: 10px 42.5px;
  &:hover {
    background: #1b1b28;
    opacity: 1;
  }
`

const StyledMenuItem = styled(Flex)`
  color: #000;
  cursor: pointer;
  opacity: 0.75;
  &:hover {
    background: #dAdada;
    opacity: 1;
  }
`

const MenuItem = ({ children, label, to,  icon }) =>
<Flex column>
  <StyledMenuItem align='center' py={10} px={10}>
    <Circle color='blue' p='6px' mr={10}>
      <Image src={icon} width={15.5} />
    </Circle>
    <LinkStyled to={to}>{label}</LinkStyled>
  </StyledMenuItem>
  { children && children.map( c => <LinkStyledChild to={c.to}>{c.label}</LinkStyledChild>)}
</Flex>

/* ------- Component ------- */
export default ({ organization }) => 
<Flex column >
  {
    Items(organization).map( item => <MenuItem {...item}/>)
  }
</Flex>


const Items = organization => [
  {
    icon: iconBuilding,
    label: 'Account',
    to: `/account/manage`
  },
  {
    icon: iconBilling,
    label: 'Billing',
    to: `/account/manage/billing`
  },
  {
    icon: iconDashboard,
    label: 'Projects',
    to: `/account/manage/projects`
  },
]