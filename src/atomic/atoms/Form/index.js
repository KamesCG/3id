/* --- Global Dependencies --- */
import React from 'react';
import { Form } from 'formik';
import styled from 'styled-components'
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
const StyledForm = styled(Form)`
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
`

/* --- Component --- */
export default ({ styled, ...props }) =>
<StyledForm {...styled} {...props}/>