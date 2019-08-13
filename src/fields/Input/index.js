/* --- Global Dependencies --- */
import styled from 'styled-components'
import { Field } from 'formik';

/* --- Local Dependencies --- */
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  space
} from 'styled-theme'

/* --- Styled Component --- */
const Input = styled(Field)`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${space}
`

Input.defaultProps = {
  boxShadow: 'light',
  borderRadius: 8,
  p: 15,
}
export default Input