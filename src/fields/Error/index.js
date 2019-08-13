/* --- Global Dependencies --- */
import styled from 'styled-components'
import { ErrorMessage } from 'formik';

/* --- Local Dependencies --- */
import { borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
  space
} from 'styled-theme'

/* --- Styled Component --- */
const ErrorField = styled(ErrorMessage)`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}
  color: red;
  font-size: 10px;
  font-weight: normal;
`

ErrorField.defaultProps = {
  color: 'red',
  fontSize: 0,
  fontWeight: 'normal'
}

export default ErrorField