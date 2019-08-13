
/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import Box from '../Box'
import { number } from "prop-types";

/* ------ Container ------ */
const Absolute = styled(Box)`${props =>`
  left: ${
    props.left
    ? typeof props.left === 'number'
      ? `${props.left}px`
      : 0
    : null
  };
  right: ${
    props.right
    ? typeof props.right === 'number'
      ? `${props.right}px`
      : 0
    : null
  };
  top: ${
    props.top
    ? typeof props.top === 'number'
      ? `${props.top}px`
      : 0
    : null
  };
  bottom: ${
    props.bottom
    ? typeof props.bottom === 'number'
      ? `${props.bottom}px`
      : 0
    : null
  };
  bottom: ${props.bottom ? 0 : null};
  position: absolute !important;
`}`

export default props => <Absolute {...props}/>