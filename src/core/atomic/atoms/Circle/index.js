/* --- Global Dependencies --- */
import idx from 'idx'
import is from 'styled-is';
import styled from 'styled-components'
import { palette, borderRadius } from 'styled-theme'
import Span from '../Span'

const Circle = styled(Span)`
  ${borderRadius};
  background-color: ${(props) => props.color ? palette(props.color, 0) : palette('purple', 0)};
  border-color: ${(props) => props.color ? palette(props.color, 1) : palette('purple', 1)};
  border-style: solid;
  border-width: 2px;

  &:hover {
    background-color: ${(props) => props.color ? palette(props.color, 1) : palette('purple', 1)};
    border-color: ${(props) => props.color ? palette(props.color, 2) : palette('purple', 2)};
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
    transition: top 1s;
    top: -1px;
  }
`

Circle.propTypes = {

}

Circle.defaultProps = {
  borderRadius: 99999
  // height: 40,
  // width: 40
}


export default Circle