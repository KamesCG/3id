/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const PhoneStyled = styled(PhoneInput)
`
  input {
    background-color: rgba(247,247,249,.7);
    background-image: linear-gradient(180deg, #ffffff, rgba(247,247,249, .65));
    height: 50px;
  }

  .react-phone-number-input__icon {
    border: none;
  }
`

/* --- Container --- */
const PhoneField = ({ name, setFieldValue, setFieldTouched, ...props }) =>
<PhoneStyled
  className='phone'
  country="US"
  disable={props.disabled}
  onChange={(value)=> setFieldValue(name, value) }
  onBlur={()=> setFieldTouched(name, true) }
  placeholder={props.placeholder}
  // value={value}
/>

PhoneField.propTypes = {
  country: PropTypes.string,
  placeholder: PropTypes.string
}

export default PhoneField