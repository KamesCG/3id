/* --- Global Dependencies --- */
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import styledBy from 'styled-by'
import is from 'styled-is';
import {
  borders,
  space,
  width,
  height,
  color,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
} from 'styled-system'

const LinkStyled = styled(Link)`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${color}
  ${opacity}
  ${space}
  ${width}
  ${height}

  &:hover {
    ${styledBy('colorHover', props => `color: ${props.colorHover}`)}

  }

  /***************************** effects *****************************/
  ${is('opaque')`
    opacity: 0.7;
    &:hover {
      color: #4f6ee4;
      opacity: 1;
    }
  `};
`

LinkStyled.defaultProps = {
  colorHover: '#2879c7',
}

export default LinkStyled