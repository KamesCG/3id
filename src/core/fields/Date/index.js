/* --- Global Dependencies --- */
import idx from 'idx'
import { DateTime } from 'luxon'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
import {
  height,
  space,
  width,
  zIndex
} from 'styled-system'

const DatePickerStyled = styled(DatePicker)`
  ${height}
  ${space}
  width: 100%;
  ${width}
  position: relative;
  ${zIndex}
  & .react-datepicker-popper {
    ${zIndex}
  }
`

DatePickerStyled.defaultProps ={
  zIndex: 50
}

/* --- Container --- */
const DateField = ({ className, name, setFieldValue, setFieldTouched, plain, gradient, styled, ...props }) => {
  const [value, setValue] = useState();

  const update = (name, value) => {
    setValue(value)
    setFieldValue(name, DateTime.fromObject(value).valueOf())
  }
  return <DatePickerStyled
    className={className | 'date'}
    placeholderText={props.placeholder || 'Select Date'}
    selected={value}
    showTimeSelect
    onChange={(value)=> update(name, value ) }
    onBlur={()=> setFieldTouched(name, true) }
    {...styled}
  />
}
DateField.propTypes = {
  options: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  menuIsOpen: PropTypes.bool
}

export default DateField