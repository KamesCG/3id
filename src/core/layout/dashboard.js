import styled from 'styled-components'
import { Flex } from 'atoms'
import is from 'styled-is';
import {
  width,
} from 'styled-system'

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
  border-bottom: 3px solid #dc448d78;
  color: #FFF;
  height: 65px;
  padding: 10px 0;
  width: 100%;
`

export const HeaderStyled = styled.div`
background-color: #2e2e48;
border-bottom: 3px solid #dc448d;
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