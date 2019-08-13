/* --- Global Dependencies --- */
import React from 'react'
import { palette } from 'styled-theme'
import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
  style
} from 'styled-system'


/* ------ Component ------ */
export default styled.button`
  background-color: ${(props) => props.palette ? palette(props.palette, 0) : 'red'};
  border-color: ${(props) => props.palette ? palette(props.palette, 0) : 'red'};
  box-shadow: 0 4px 16px 0 rgba(88,103,221, 0.15);
  border: 1px solid transparent;
  border-radius: .25rem;
  color: #fff;
  display: inline-block;
  font-size: 0.71rem;
  font-weight: 400;
  outline: 0!important;
  padding: .65rem 1rem;
  line-height: 1.5;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  vertical-align: middle;
  text-align: center;
  ${borderColor}
  ${borderRadius}
  ${fontFamily}
  ${fontWeight}
  ${space}
  
  &:hover {
    background-color: ${(props) => props.palette ? palette(props.palette, 1) : 'red'};
    border-color: ${(props) => props.palette ? palette(props.palette, 1) : 'red'};
  }
`