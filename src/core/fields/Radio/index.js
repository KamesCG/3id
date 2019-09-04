/* --- Global Dependencies --- */
import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import styled from 'styled-components'
import { Box } from 'atoms'

const RadioOptions = ({ className, horizontal, name, setFieldValue, setFieldTouched, options, ...props }) => 
<RadioGroup
  className='radios'
  onChange={(option)=> setFieldValue(name, option) } 
  horizontal={horizontal}
  >
  {
    options && Array.isArray(options) &&
    options.map( option => <RadioButton pointColor='rgb(52, 102, 179)' className='radio-item' value={option.value} children={option.label}  />)
  }
</RadioGroup>


export default RadioOptions