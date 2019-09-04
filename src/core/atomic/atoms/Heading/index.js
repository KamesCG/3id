
/* --- Global Dependencies --- */
import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { borders, borderColor, space, width, fontSize, fontWeight, textAlign, color } from 'styled-system'
import { palette as palettes } from 'styled-theme'
import is from 'styled-is';
import { withoutProps } from 'helpers'
import { cursor, textShadow } from 'helpers/styles'

const Heading = ({level, ...props}) => {
  const Header = `h${level}`
  return <Header {...props}/>
}

Heading.defaultProps = {
  level: 3,
}
Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
}

const HeadingStyled = styled(withoutProps([ 'color', 'hoverBold','hoverUnderline', 'fontWeight', 'fontSize', 'level', 'm', 'my', 'mx', 'ml', 'mr', 'mt', 'mb','p', 'py', 'px', 'pl', 'pr', 'pt', 'pb', 'palette', 'slim','textShadow', 'textAlign'])(Heading))`
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
  
  /***************************** text align *****************************/
  ${is('uppercase')`
    text-transform: uppercase;
  `};
  ${is('center')`
    text-align: center;
  `};
  ${is('right')`
    text-align: right;
  `};
  /***************************** utilities *****************************/
  ${is('slim')`
    margin-bottom: 0;
  `};
  ${is('fat')`
    margin-bottom: 20px;
  `};

  ${is('pointer')`
    cursor: pointer;
  `};
  /***************************** effects *****************************/
  ${is('thin')`
    font-weight: 300;
  `}
  ${is('normal')`
    font-weight: normal;
  `}
  ${is('heavy')`
    font-weight: 700;
  `}
  ${is('thick')`
    font-weight: 900;
  `}

  ${is('xs')`
    font-size: 12px;
  `};
  ${is('sm')`
    font-size: 14px;
  `};
  ${is('md')`
    font-size: 22px;
  `};
  ${is('lg')`
    font-size: 36px;
  `};
  ${is('xl')`
    font-size: 42px;
  `};

  ${is('dash')`
    position: relative;
    &:after,
    &:before {
      background-color: #c8c9d1;
      content: '';
      bottom: -3px;
      left: 0;
      position: absolute;
      height: 2px;
      width: 35%;
      -webkit-transition: width 250ms;
      transition: width 250ms;
      top: 10px;
      z-index: -1;
    }

    &:before {
      left: unset;
      right: 0;
    }
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
        width: 50px;
      }
  `};
`
export default HeadingStyled