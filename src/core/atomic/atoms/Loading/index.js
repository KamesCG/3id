
/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import Span from '../Span'
import { loadingInfinity } from 'assets/images'

import {
  borders,
  space,
  width,
  height,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
} from 'styled-system'

const Loading = styled.img`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${opacity}
  ${space}
  ${width}
  ${height}
`

Loading.defaultProps = {
  background: '#FFF',
  border: '1px solid #FFF',
  borderRadius: 99999,
  width: 48
}

export default props => <Span circle p={10} bg='white'><Loading src={loadingInfinity}/></Span>