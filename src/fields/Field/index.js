/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import { Box } from 'atoms'
import Input from '../Input';
import Error from '../Error';

const FieldStyled = styled(Box)
`
  & > label {
    margin-top: 0;
  }

  & .input-error {
    background: #FFF;
    padding: 5px;
    border: 1px solid #9a9a9a42;
    border-radius: 4px;
    // box-shadow: 1px 2px 7px 1px #00000012;
    box-shadow: 1px 1px 0px 1px #00000012;
    top: -7px;
    right: -7px;
  }
`
/* --- Component --- */
export default ({ type = 'text', name, label, placeholder, component, styled }) =>
<FieldStyled mt={20} {...styled}>
  <label>{label}</label>
  <Box>
    {
      !component
      ? <Input fancy type={type} name={name} placeholder={placeholder} />
      : component
    }
    <Error floating name={name} component="span" className="input-error"/>
  </Box>
</FieldStyled>