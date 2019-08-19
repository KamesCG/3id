/* --- Global Dependencies --- */
import idx from 'idx'
import styled from 'styled-components'
import { palette } from 'styled-theme'
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

/* --- Local Dependencies --- */
const themed = key => props => props.theme[key]

const textShadow = style({
  prop: 'textShadow', // React prop name
  cssProperty: 'textShadow', // The corresponding CSS property (defaults to prop argument)
  key: 'textShadow',
})

/* ------ Component ------ */
const ButtonStyled = styled.button`
  ${alignSelf}
  ${color}
  ${letterSpacing}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${boxShadow}
  ${backgroundImage}
  ${flex}
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${textShadow}
  ${width}
  ${height}
  ${opacity}
  ${space}

  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out,top 350ms ease-out;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  

  ${is('pill')`
    border-radius: 95px;
    padding-bottom: 12.5px;
    padding-top: 12.5px;
    padding-left: 22.5px;
    padding-right: 22.5px;
  `};

  ${is('large')`
    font-size: 103%;
    padding: 20px;
  `};
  ${is('small')`
    font-size: 60%;
    padding: 6px;
  `};

  ${props => 
    props.gradient && idx(props, _=>_.theme.gradient[props.gradient]) && !props.transparent
    ? `
      background: ${props.theme.gradient[props.gradient][0]};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '0'}deg , ${props.theme.gradient[props.gradient]});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '0'}deg , ${props.theme.gradient[props.gradient]});
      `
    : null
  }

  ${is('outline')`
    background: none;
    background-image: none;
    border-color: ${props => props.theme.gradient[props.gradient][0]}
    border-style: solid;
    border-width: 1px;
    color: ${props => props.theme.gradient[props.gradient][0]};
    // ${color}
    text-shadow: none;
  `};

  ${is('flow')`
    background-position: 0 0;
    background-size: 200% 140% !important;
    transition: 0.5s;

    &:hover {
      background-position: 60px;
    }
  `};
  

  
  ${props => 
    props.transparent
    ? 
    `
      background: transparent !important;
      background-color: transparent !important;
      background-image: unset !important;
      border: 1px solid ${idx(props, _=>_.theme.colors[props.borderColor]) || 'white'} !important};
      box-shadow: unset !important;
    `
    : null
  }
  // Button States
  &:active {
    top: 3px;
    outline: none;
  }
  &:hover {
    top: 2px;
    outline: none;
  } 

`

ButtonStyled.defaultProps = {
  bg: 'blueOcean',
  gradient: 'blueOcean',
  gradientDir: 180,
  borderRadius: 6,
  // boxShadow: 0,
  color: 'white',
  fontSize: 1,
  textAlign:'center',
  py: 10,
  px: 16,
  hover: {
    boxShadow: 2
  }
}

export default ButtonStyled