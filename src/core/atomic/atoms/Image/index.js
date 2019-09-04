
/* --- Global Dependencies --- */
import styled from 'styled-components'
import is from 'styled-is';
import {
  space,
  width,
  height,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
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

  ${is('circle')`
    border-radius: 99999px;
  `};
`

Image.propTypes = {

}
Image.defaultProps = {
  
}

export default Image