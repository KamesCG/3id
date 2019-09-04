
/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import Box from '../Box'

/* ------ Container ------ */
const Absolute = styled(Box)`${props =>`
  left: ${props.left ? props.left : 'initial'};
  right: ${props.right ? props.right : 'initial'};
  top: ${props.top ? props.top : 'initial'};
  bottom: ${props.bottom ? props.bottom : 'initial'};
  position: fixed !important;
 
  .inner-content {
    display: none;
    opacity: 0;
  }

  &:hover {
    .inner-content {
      animation: 0.55s ease 0s normal forwards 1 fadein;
      -webkit-animation: 0.55s ease 0s normal forwards 1 fadein;
      display: inline-block;
      opacity: 1;
    }
  }
  @keyframes fadein{
    0%{opacity:0}
    80%{opacity:0}
    100%{opacity:1}
  }

  @-webkit-keyframes fadein{
      0%{opacity:0}
      80%{opacity:0}
      100%{opacity:1}
  }
`}`

export default props => <Absolute {...props}/>