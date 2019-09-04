/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import is from 'styled-is';
import Select from 'react-select/lib/Creatable'
import {
  height,
  space,
  width,
  zIndex
} from 'styled-system'

const SelectStyled = styled(Select)`
  ${height}
  ${space}
  width: 100%;
  ${width}
  ${zIndex}

  ${is('gradient')`
    & * {
      box-shadow: none !important;
      border-color: transparent !important;
      border-width: 0;
      border-style: none !important; 
      outline: none !important;
    }
    & [class*=control] {
      background-image: linear-gradient(90deg ,#2a39df,#439deb);
      background-image: -webkit-linear-gradient(90deg ,#2a39df,#439deb);
      border-radius: 0 7px 7px 0 !important;
      color: #FFF !important;
    }

    & [class*=singleValue] {
      color: #FFF !important;
    }
    & [class*=indicatorContainer] {
      color: #FFF !important;
    }

    & [class*=placeholder] {
      color: #FFF;
    }
    & [class*=menu] {
      color: #000;
    }
  `}
  ${is('plain')`
    border: none;
    border-radius: 0 !important;
    border-width: 0 !important;
    margin: 0;
    padding: 0;
    & > * {
      border: none;
      border-radius: 0 !important;
      border-width: 0 !important;
    }
    & input,
    & *, {
      outline: none !important;
    }
  `};
`

SelectStyled.defaultProps ={
  zIndex: 100
}

/* --- Container --- */
const SelectField = ({ className, name, setFieldValue, setFieldTouched, plain, gradient, values, styled, zIndex, ...props }) => 
  <SelectStyled
    plain={plain}
    gradient={gradient}
    className={className | 'select'}
    options={props.options || []}
    value={idx(values, _=>_.address.country)}
    placeholder={props.placeholder}
    isDisabled={props.isDisabled}
    isMulti={props.isMulti}
    isSearchable={props.isSearchable}
    menuIsOpen={props.isOpen}
    onChange={(option)=> setFieldValue(name, option.value) }
    onBlur={()=> setFieldTouched(name, true) }
    {...styled}
  />

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  menuIsOpen: PropTypes.bool
}

export default SelectField