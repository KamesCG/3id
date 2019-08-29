/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import styled from 'styled-components'
import { palette as palettes } from 'styled-theme'
import is from 'styled-is';
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  backgroundColor,
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

/* --- Local Dependencies --- */
import { withoutProps } from 'helpers'
import { cursor, textShadow, transform, zIndex } from 'helpers/styles'

const Text = styled.span(props => ({
  boxSizing: 'border-box',
  display: props.block ? 'block' : 'initial'
}),
  alignSelf,
  backgroundColor,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  color,
  cursor,
  flex,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  letterSpacing,
  textAlign,
  order,
  opacity,
  space,
  variant,
  width,
)

const Span = styled(withoutProps(['color', 'floating', 'fontSize', 'fontWeight'])('span'))`
  ${alignSelf}
  ${backgroundColor}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${opacity}
  ${space}
  ${textAlign}
  ${transform}
  ${textShadow}
  ${width}
  color: ${({palette}) => palette ? palettes(palette[0], palette[1]) : null};
  ${is('pointer')`
    cursor: pointer;
  `};
  ${is('block')`
    display: block;
  `}
  ${is('inlineBlock')`
    display: inline-block;
  `}
  ${is('round')`
    border-radius: 9999px;
  `}

  ${is('tag')`
    border-radius: 7px;
    font-size: 12px;
    padding: 5px 15px;
    text-shadow: 0 1px 1px rgba(45, 45, 45, 0.28);
  `}

  ${is('hoverBold')`
    &:hover {
      font-weight: bold;
    }
  `}
  
  ${is('hoverUnderline')`
      position: relative;
      &:after {
        background-color: #c8c9d1;
        content: '';
        bottom: -3px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        height: 1px;
        width: 0px;
        transition: width 250ms;
      }
      &:hover:after {
        width: 100%;
      }
  `};
  ${is('underlineSlim')`
      &:hover:after {
        width: 40%;
      }
  `}

  ${props => 
    props.gradient && idx(props, _=>_.theme.gradient[props.gradient])
    ? `
      background: ${props.theme.gradient[props.gradient][0]};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${props.theme.gradient[props.gradient]});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${props.theme.gradient[props.gradient]})
      `
    : null
  }

`

export default Span