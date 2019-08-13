/* --- Global Dependencies --- */
import React from 'react'
import { Link, Router } from '@reach/router'
import styled from 'styled-components'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

/* --- Local Dependencies --- */
import { Heading, Flex } from 'atoms'
import { AuthorizationLogin } from 'containers'
import {
  Dashboard,
  People,
  VerifiableCredentials,
  ClaimsSearch,
  Overview, Search, IssueClaims, Templates, TemplateCreate, Roles,
  MenuAside } from 'views'

/* --- Styled Component --- */

const AsideStyled = styled.div`
  background-color: #1e1e2d;
  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);
  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);
  color: #FFF;
  width: 15%;
`

const BrandingStyled = styled.div`
  background-color: #1e1e2d;
  color: #FFF;
  display: inline-block;
  padding: 20px 0;
  width: 100%;
`

const HeaderStyled = styled.div`
  background-color: #FFF;
  border-bottom: 1px solid #dadada;
  color: #1e1e2d;
  height: 60px;
  padding: 10px 20px;
  width: 100%;
`

const MainStyled = styled.div`
  background-color: #ecebf2;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 85%;
`
const MainOuter = styled.div`
  background-color: #ecebf2;
  // padding: 20px;
  height: 100%;
`
const MainInner = styled.div`
  background-color: #ecebf2;
  padding: 20px;
`
/* ------ Component ------ */
export default props =>
<Flex height='100vh'>
  <AsideStyled>
    <BrandingStyled>
    <Heading fontSize={[1,1,2,3]} mb={0} level={1} textAlign='center' ><Link to="/">Credentialize</Link></Heading>
    </BrandingStyled>
    <MenuAside/>
  </AsideStyled>
  <MainStyled>
    <HeaderStyled>
      <Flex>
        <AuthorizationLogin styled={{alignSelf:'flex-end', ml: 'auto'}}/>
      </Flex>
    </HeaderStyled>
    {/* <PerfectScrollbar>
    <MainInner>
      <Router>
        <Dashboard path="/dashboard" />
        <Search path="/dashboard/search" />
        <People path="/dashboard/people" />
        <IssueClaims path="/dashboard/issue" />
        <Templates path="/dashboard/templates" />
        <TemplateCreate path="/dashboard/templates/create" />
        <Roles path="/dashboard/roles" />
      </Router>
    </MainInner>
    </PerfectScrollbar> */}
    <MainOuter>

    <Router>
      <VerifiableCredentials path="/dashboard/verifiable-credentials/*" />
      <ClaimsSearch path="/dashboard/claims/*" />
    </Router>
    </MainOuter>
  </MainStyled>
</Flex>