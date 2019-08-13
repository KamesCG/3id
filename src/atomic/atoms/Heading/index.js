
/* --- Global Dependencies --- */
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { borders, borderColor, space, width, fontSize, fontWeight, textAlign, color, style } from 'styled-system'
import { palette as palettes } from 'styled-theme'
import is from 'styled-is';

const Heading = ({ bg, borderRadius, textShadow, color, level, palette, m, my, mt, mb, mx, ml, mr, p, py, pt, pb, px, pl, pr, ...props}) => {
  const Header = `h${level}`
  return <Header {...props}/>
}

Heading.defaultProps = {
  level: 3,
}
Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

Heading.passProps = false
const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
})

const textShadow = style({
  prop: 'textShadow', // React prop name
  cssProperty: 'textShadow', // The corresponding CSS property (defaults to prop argument)
  key: 'textShadow',
})
const Header = styled(Heading)`
  ${borders}
  ${borderColor}
  ${color}
  color: ${({palette}) => palette ? palettes(palette[0], palette[1]) : null};
  ${cursor}
  ${width}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
  ${textShadow}
  ${space}
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
  ${is('slim')`
    margin-bottom: 0;
  `};
`

Header.propTypes = {
  color:  PropTypes.string,
  palette:  PropTypes.string,
  level:  PropTypes.number,
}
Header.defaultProps = {
  level: 3
}

Header.passProps = false

export default Header