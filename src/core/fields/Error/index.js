/* --- Global Dependencies --- */
import styled from 'styled-components'
import { ErrorMessage } from 'formik';
import is from 'styled-is';
import { borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
  space
} from 'styled-theme'

/* --- Local Dependencies --- */
import { withoutProps } from 'helpers'

/* --- Styled Component --- */
const ErrorField = styled(withoutProps(['boxShadow', 'borderRadius', 'color', 'floating', 'fontSize', 'fontWeight', 'p', 'm'])(ErrorMessage))`
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

  ${is('floating')`
    position: absolute;
    right: 0;
    top: -20px;
  `};

  ${is('withLabel')`
    top: 0
  `};


`

ErrorField.defaultProps = {
  color: 'red',
  fontSize: 0,
  fontWeight: 'normal'
}

export default ErrorField