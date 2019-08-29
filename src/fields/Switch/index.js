/* --- Global Dependencies --- */
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Switch from "react-switch";
import styled from 'styled-components'
import {
  height,
  space,
  width,
} from 'styled-system'

/* --- Local Dependencies --- */
import { Flex, Label } from 'atoms'

/* --- Styled --- */
const SwitchStyled = styled(Switch)`
  ${height}
  ${space}
  ${width}
`

SwitchStyled.defaultProps ={
  mr: 15
}

/* --- Container --- */
const SwitchField = ({ label, name, height, offColor, onColor, width, setFieldValue, setFieldTouched, ...props }) => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked)
    setFieldValue(name, !checked)
  }

  return (
    <Flex align='center' mt={20}>
      <SwitchStyled
        checked={checked}
        className='switch'
        height={height}
        width={width}
        offColor={offColor}
        onColor={onColor || '#265de6'}
        onChange={toggle}
        onBlur={()=> setFieldTouched(name, true) }
      />
      <Label fontSize={[1,1,2]} m={0}>{label}</Label>
    </Flex>
  )
}

SwitchStyled.propTypes = {
  checked: PropTypes.bool,
  offColor: PropTypes.string,
  onColor: PropTypes.string,
  offHandleColor: PropTypes.string,
  onHandleColor: PropTypes.string
}

export default SwitchField