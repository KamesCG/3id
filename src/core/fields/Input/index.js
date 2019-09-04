/* --- Global Dependencies --- */
import styled from 'styled-components'
import { Field } from 'formik';
import is from 'styled-is';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  space
} from 'styled-theme'

/* --- Local Dependencies --- */
import { withoutProps } from 'helpers'

/* --- Styled Component --- */
const Input = styled(withoutProps(['boxShadow', 'borderRadius', 'fancy', 'p', 'm'])(Field))`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${space}
  color: #595f79;
  ${color}
  ${is('fancy')`
    border: none;
    height: 40px;
    margin-top: 0;
    background-color: rgba(247,247,249,.7);
    background-image: linear-gradient(180deg, #ffffff, rgba(247,247,249, .65));
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    outline: none;
    transition: background-color .3s ease;

      &:focus,
      &:active,
      {
        background-color: rgba(247,247,249,1);
      }

    ${is('small')`
      height: 35px;
      margin: 0;
    `};
  `};

`

Input.defaultProps = {
  boxShadow: 'light',
  borderRadius: 8,
  color: '#595f79',
  p: 15,
}

export default Input