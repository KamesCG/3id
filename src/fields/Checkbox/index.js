/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'

const Checkbox = ({id, label, name, value}) =>
<>
  <input
    name={name}
    type="checkbox"
    value={value}
    checked={value}
  />
  <label htmlFor={id}>{label}</label>
</>

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool
}

export default Checkbox