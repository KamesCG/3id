/* --- Global Dependencies --- */
import React from "react"
import styled from 'styled-components'
import is from 'styled-is';
import {
  width,
} from 'styled-system'
/* --- Local Dependencies --- */
import { Box, Flex, Heading } from 'atoms'
import { HeaderDocumentation } from "layout"
import { Menu } from 'components'
export const AsideStyled = styled.div`
  background-color: #1e1e2d;
  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);
  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);
  color: #FFF;
  min-height: 100vh;
  ${width}
  flex: 1;
  ${is('isExpanded')`
    flex: 3;
    // width: 15%
  `};
`
import Items from 'static/menus/documentation'

const Layout = ({ children }) =>
<>
    <Flex>
      <AsideStyled>
        <Box p={20}>
          <Heading md thin>
            Documentation
          </Heading>
          <Menu items={Items}/>
        </Box>
      </AsideStyled>
      <Box flex={4}>
        <HeaderDocumentation />
        <main>{children}</main>
      </Box>
    </Flex>
</>

export default Layout
