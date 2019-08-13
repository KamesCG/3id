
/* --- Global Dependencies --- */
import Box from '../Box'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const BoxContainer = styled(Box)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

BoxContainer.defaultProps = {
  px: [ 30, 30, 30 ],
  width: [1,1, 980, 1020]
}

export default BoxContainer