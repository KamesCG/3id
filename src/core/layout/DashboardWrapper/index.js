/* --- Global Dependencies --- */
import React from "react"
import { Link } from '@reach/router'
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import is from 'styled-is';
import {
  width
} from 'styled-system'

/* --- Local Dependencies --- */
import { logoIcon } from 'assets/images'
// import FormSearch from 'forms/FormSearch'
import { Footer } from "layout"
import { Logo } from 'layout'
import { Flex, Heading, Image, Span } from 'atoms'
import { AuthorizationLogin } from 'containers'
import { MenuAside, MenuAsideSmall } from 'views'

export const AsideStyled = styled.div`
  background-color: #1e1e2d;
  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);
  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);
  color: #FFF;
  ${width}
  flex: 1;
  ${is('isExpanded')`
    flex: 3;
    // width: 15%
  `};
`
export const BrandingStyled = styled(Flex)`
  background-color: #1e1e2d;
  border-bottom: 3px solid #edbb2e8f;
  color: #FFF;
  height: 70px;
  padding: 10px 0;
  width: 100%;
`

export const HeaderStyled = styled.div`
background-color: #2e2e48;
border-bottom: 3px solid #edbb2e;
color: #FFF;
height: 70px;
padding: 12px 20px;
width: 100%;
z-index: 1000;
`
export const MainStyled = styled.div`
  background-color: #ecebf2;
  display: flex;
  flex: 20;
  flex-direction: column;
  height: 100%;
  width: 85%;
`
export const MainOuter = styled.div`
  background-color: #ecebf2;
  // padding: 20px;
  height: 100%;
`
export const MainInner = styled.div`
  background-color: #ecebf2;
  display: flex;
  height: 100%;
  width: 100%;
  // padding: 20px;
`
const Header = ({ className }) =>
<HeaderStyled className={className}>
  <Flex between align='center' px={[15, 20, 40]} >
    <Logo/>
    <Flex align='center' >
      <MenuItem label='Catalog' to='/store/catalog'/>
      <MenuItem label='Cart' to='/store/cart'/>
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
<MainStyled>
  <HeaderStyled>
    <Flex alignCenter between>
      {/* <FormSearch/> */}
      {/* <AuthorizationLogin styled={{alignSelf:'flex-end', color: 'white', ml: 'auto'}}/> */}
     <Flex>
        <MenuItem label='Documentation' to='/documentation'/>
        <MenuItem label='Profiles' to='/profile'/>
        <MenuItem label='Issuers' to='/issuers'/>
        <MenuItem label='Dashboard' to='/dashboard'/>
     </Flex>
    </Flex>
  </HeaderStyled>
  <MainOuter>
    <PerfectScrollbar>
    <MainInner>
      {children}
    </MainInner>
  </PerfectScrollbar>
  </MainOuter>
</MainStyled>

export const Aside = ({ layout, }) =>
<AsideStyled isExpanded={layout.isAsideExpanded}>
  <BrandingStyled center column>  
  {
    layout.isAsideExpanded
    ? <Heading uppercase pointer onClick={layout.toggleAsideExpanded} fontSize={[3]} fontWeight={300} m={0} mb={0} textAlign='center' >
        <Logo/>
      </Heading>
    : <Span pointer>	<Image onClick={layout.toggleAsideExpanded} src={logoIcon} width={1} px={15}/></Span>
  }
  </BrandingStyled>
  {
    layout.isAsideExpanded
    ? <MenuAside/>
    : <MenuAsideSmall/>
  }
</AsideStyled>

export default ({ children }) =>
<>
  <Header />
    <Main>{children}</Main>
  <Footer />
</>