
/* --- Global Dependencies --- */
import Box from '../Box'
import styled from 'styled-components'
import is from 'styled-is';
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

  ${is('left')`
    margin-left: 0;
  `};
`

BoxContainer.defaultProps = {
  px: [ 30, 30, 30 ],
  width: [1,1, 780, 1020]
}

export default BoxContainer