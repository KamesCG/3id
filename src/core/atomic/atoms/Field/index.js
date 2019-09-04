/* --- Global Dependencies --- */
import React from 'react';
import { Form, Field } from 'formik';
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
  color,
  height,
  flex,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  opacity,
  space,
  width,
} from 'styled-system'

/* --- Styled --- */
const StyledField = styled(Field)`
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
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
  ${width}
  ${height}
  ${opacity}
  ${space}

  :focus {
    box-shadow: 0 1px 3px rgba(245, 243, 243, 0.15), 0 1px 2px rgba(0,0,0,0.35);
    outline: none;
  }
  ::placeholder {
    color: #9ea4b9;
    font-size: 10px;
  }
`

/* --- Component --- */
export default ({ styled, ...props }) =>
<StyledField {...styled} {...props}/>