/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'

/* --- Local Dependencies --- */
import Absolute from '../Absolute'

const BackgroundImage = styled.div`${props =>`
  background-image: ${props.src ? `url(${props.src})` : null};
  background-size: cover;
  background-position: ${props.position ? props.position : 'center'};
  padding-bottom: ${((props.ratio || 3/4) * 100) + '%'};
  height: 100%;
  width: 100%;
`}`

/* ------ Component ------ */
export default props => <Absolute left right top bottom overflow='hidden' {...props} ><BackgroundImage src={props.src} ratio={props.ratio} /></Absolute>