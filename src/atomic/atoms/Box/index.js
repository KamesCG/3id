/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import styled from 'styled-components'
import is from 'styled-is';
import {
  alignSelf,
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
  height,
  flex,
  order,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  opacity,
  variant,
  space,
  style,
  width,
} from 'styled-system'

/* --- Themed --- */
const themed = key => props => props.theme[key]

const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
})

const display = style({
  prop: 'display',
  cssProperty: 'display',
})

const maxHeight = style({
  prop: 'maxHeight',
  cssProperty: 'maxHeight',
})
const minHeight = style({
  prop: 'minHeight',
  cssProperty: 'minHeight',
})

const overflow = style({
  prop: 'overflow',
  cssProperty: 'overflow',
})

const transform = style({
  prop: 'transform',
  cssProperty: 'transform',
})

const zIndex = style({
  prop: 'zIndex',
  cssProperty: 'zIndex',
})

/* ------ Component ------ */
const Block = styled('div')(props => ({
  boxSizing: 'border-box',
}),
  alignSelf,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  color,
  cursor,
  display,
  flex,
  fontSize,
  fontWeight,
  height,
  lineHeight,
  maxHeight,
  minHeight,
  letterSpacing,
  order,
  opacity,
  overflow,
  textAlign,
  transform,
  variant,
  width,
  zIndex,
  themed('Box')
)

const BoxStyled = styled(Block)`
  position: relative;
  
  ${is('card')`
    background-color: #FFF;
    background: ${props => props.theme.gradient['white'][0]};
    background-image: -webkit-linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}` });
    background-image: linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}`} );
    border-radius: 8px;
    box-shadow: ${props => idx(props, _=>_.theme.shadows['light'])};
    padding: 15.5px;
  `};

  ${is('cardHover')`
    &:hover {
      box-shadow: ${props => idx(props, _=>_.theme.shadows['lightHover'])};
    }
  `};

  ${is('inlineBlock')`
    display: inline-block;
  `};
  ${is('inline')`
    display: inline;
  `};
  ${is('borderBottom')`
    border-radius: 0 0 8px 8px;
  `};
  ${is('borderTop')`
    border-radius: 8px 8px 0 0;
  `};

  ${is('rounded')`
    border-radius: 40px;
  `};
  ${is('circle')`
    border-radius: 99999px;
  `};

  ${borders}
  ${borderColor}
  ${borderRadius}
  ${space}

  ${props => 
    props.gradient && idx(props, _=>_.theme.gradient[props.gradient])
    ? `
      background: ${props.theme.gradient[props.gradient][0]};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${props.theme.gradient[props.gradient]});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '-90'}deg , ${props.theme.gradient[props.gradient]})
      `
    : null
  }
  &:hover {
    ${props => idx(props, _=>_.hover.boxShadow) && `box-shadow: ${props.theme.shadows[props.hover.boxShadow]};`}
    ${props => idx(props, _=>_.hover.zIndex) > 0 && `z-index: ${props.hover.zIndex}`}
  }
`

export default props => <BoxStyled {...props}/>