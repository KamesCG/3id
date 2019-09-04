/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik';

/* --- Local Dependencies --- */
import { Label,  Flex } from 'atoms'
import Error from '../Error';



const Checkbox = styled(Flex)
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
export default ({ type = 'text', name, label, placeholder, component, styled, ...props }) =>
<Flex align='center' {...styled}>
  <Field fancy type={'checkbox'} name={name} placeholder={placeholder} />
  <Label fontSize={2}>{label}</Label>
  <Error name={name} component="span" className="input-error"/>
</Flex>