/* --- Global Dependencies --- */
import { palette } from 'styled-theme'
import styled from 'styled-components'
import is from 'styled-is';
import {
  space,
  width,
  height,
  alignSelf,
  fontSize,
  fontFamily,
  fontWeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  opacity,
  style
} from 'styled-system'

const textShadow = style({
  prop: 'textShadow', // React prop name
  cssProperty: 'textShadow', // The corresponding CSS property (defaults to prop argument)
  key: 'textShadow',
})
/* ------ Component ------ */
export default styled.button`
  background-color: ${(props) => props.palette ? palette(props.palette, 0) : palette('red', 0)};
  border-color: ${(props) => props.palette ? palette(props.palette, 1) : palette('red', 1)};
  box-shadow: 0 6px 8px -5px rgba(88,103,221,0.15);
  border-width: 1px;
  border-style: solid;
  border-radius: .25rem;
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 470;
  line-height: 1.5;
  letter-spacing: 0.015em;
  padding: .65rem 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  vertical-align: middle;
  transition: top 1s;
  text-align: center;
  outline: 0!important;
  ${alignSelf}
  ${letterSpacing}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${boxShadow}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${textShadow}
  ${width}
  ${height}
  ${opacity}
  ${space}

  ${is('disabled')`
    background-color: ${palette('gray', 2)} !important;
    border-color: ${palette('gray', 2)} !important;
    color: #FFF !important;
  `};
  
  ${is('white')`
    background-color: ${palette('white', 0)} !important;
    border-color: ${palette('gray', 0)} !important;
    color: #5f5f5f !important;
  `};
  
  ${is('uppercase')`
    text-transform: uppercase;
  `};
  
  ${is('sm')`
    font-size: 0.65rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0.055em;
    padding: .65rem 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  `};

  ${is('lg')`
    font-size: 0.95rem;
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.055em;
    padding: .65rem 1rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  `};
  
  &:hover {
    background-color: ${(props) => props.palette ? palette(props.palette, 1) : palette('red', 1)};
    border-color: ${(props) => props.palette ? palette(props.palette, 2) : palette('red', 2)};
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
    transition: top 1s;
    top: -1px;
  }

  // Button States
  &:active {
    top: -3px;
  }
`