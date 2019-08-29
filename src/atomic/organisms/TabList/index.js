/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { TabList } from 'react-tabs';
import styled from 'styled-components'
import is from 'styled-is';
import {
  alignSelf,
  background,
  boxShadow,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  height,
  lineHeight,
  letterSpacing,
  opacity,
  variant,
  space,
  style,
  width,
} from 'styled-system'
import { withoutProps } from 'helpers'
import { cursor, display, maxHeight, minHeight, overflow, transform, zIndex } from 'helpers/styles'

const TabListStyled = styled(TabList)`
  ${alignSelf}
  ${boxShadow}
  ${cursor}
  ${display}
  ${fontSize}
  ${height}
  ${lineHeight}
  ${letterSpacing}
  ${opacity}
  ${overflow}
  ${transform}
  ${variant}
  ${space}
  ${width}
  ${zIndex}

  ${is('default')`
    font-size: 103%;
    padding: 0;

    & li {
      margin-bottom: 0;
    }

    & > li.react-tabs__tab {
      background: #transparent;
      border-radius: 10px 10px 0 0;
      padding: 10px 25px;
      ${color}
    }
  
    & > li.react-tabs__tab:focus:after {
      background: transparent !important;
      content: none !important;
      position: absolute;
    } 
    
    & > li.react-tabs__tab--selected {
      background: #FFF;
      border-color: #dedede;
      ${background}
      ${color}
      font-weight: 500;
    }
  `};
  
`

TabListStyled.tabsRole = 'TabList';

TabListStyled.defaultProps = {
  m: 0,
  p: 0
}

export default TabListStyled