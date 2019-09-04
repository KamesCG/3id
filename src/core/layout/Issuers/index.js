/* --- Global Dependencies --- */
import React from "react"
import { Link } from '@reach/router'
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import is from 'styled-is';
import {
  width, space
} from 'styled-system'
/* --- Local Dependencies --- */
import { Footer } from "layout"
import { Box, Flex, Span } from 'atoms'
import { Logo } from 'layout'
import { Menu } from 'components'
import Items from 'static/menus/issuers'

const HeaderStyled = styled.div`
  background-color: #2e2e48;
  border-bottom: 3px solid #dc448d;
  color: #FFF;
  height: 70px;
  padding: 12px 10px;
  width: 100%;
  z-index: 1000;
`
export const AsideStyled = styled(Box)`

  ${width}
  flex: 1;
  ${is('isExpanded')`
    flex: 3;
    // width: 15%
  `};
`

const Header = ({ className }) =>
<HeaderStyled className={className}>
  <Flex between align='center' px={[15]} >
    <Logo label='Issuers'/>
    <Flex align='center' >
      <MenuItem label='Documentation' to='/documentation'/>
      <MenuItem label='Profiles' to='/profile'/>
      <MenuItem label='Issuers' to='/issuers'/>
      <MenuItem label='Dashboard' to='/dashboard'/>
    </Flex>
  </Flex>
</HeaderStyled>

const MenuItem = ({ label, to }) =>
<Span fontSize={[1]} mr={15}>
  <Link to={to}>
    {label}
  </Link>
</Span>

export const Main = ({ children }) =>
<MainStyled flex={5}>
  <MainOuter>
    <PerfectScrollbar>
    <MainInner>
      {children}
    </MainInner>
  </PerfectScrollbar>
  </MainOuter>
</MainStyled>

export default ({ children }) =>
<>
  <Header />
  <Flex>
    <AsideStyled card flex={1}>
      <Menu items={Items}/>
    </AsideStyled>
    <Main>{children}</Main>
  </Flex>
  <Footer />
</>

export const BrandingStyled = styled(Flex)`
  background-color: #1e1e2d;
  border-bottom: 3px solid #dc448d78;
  color: #FFF;
  height: 65px;
  padding: 10px 0;
  ${space}
  width: 100%;
`
export const MainStyled = styled.div`
  background-color: #ecebf2;
  display: flex;
  flex: 5;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const MainOuter = styled.div`
  background-color: #ecebf2;
  height: 100%;
`
export const MainInner = styled.div`
  background-color: #ecebf2;
  display: flex;
  height: 100%;
  width: 100%;
`