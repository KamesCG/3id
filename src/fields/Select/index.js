/* --- Global Dependencies --- */
import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select/lib/Creatable'
import styled from 'styled-components'
import {
  height,
  space,
  width,
} from 'styled-system'

const SelectStyled = styled(Select)`
  ${height}
  ${space}
  ${width}
`

SelectStyled.defaultProps ={
  mt: 20,
}

/* --- Container --- */
const SelectField = ({ name, setFieldValue, setFieldTouched, ...props }) => 
<SelectStyled
  className='select'
  options={props.options || []}
  placeholder={props.placeholder}
  isDisabled={props.isDisabled}
  isMulti={props.isMulti}
  isSearchable={props.isSearchable}
  menuIsOpen={props.isOpen}
  onChange={(option)=> setFieldValue(name, option) }
  onBlur={()=> setFieldTouched(name, true) }
/>

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  menuIsOpen: PropTypes.bool
}

export default SelectField