
/* --- Global Dependencies --- */
import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  fontSize,
  // fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
  style
} from 'styled-system'

const Image = styled.img`
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${boxShadow}
  ${opacity}
  ${space}
  ${width}
  ${height}
`

Image.propTypes = {

}
Image.defaultProps = {
  border: '1px solid #FFF',
  borderRadius: 99999,
  boxShadow: 1,
  width: 48
}

export default Image