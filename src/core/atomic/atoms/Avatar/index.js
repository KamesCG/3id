
/* --- Global Dependencies --- */
import styled from 'styled-components'
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

const Avatar = styled.img`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${opacity}
  ${space}
  ${width}
  ${height}
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);
`

Avatar.defaultProps = {
  border: '1px solid #FFF',
  borderRadius: 99999,
  boxShadow: 2,
  width: 48
}

export default Avatar