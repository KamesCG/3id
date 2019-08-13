/* --- Global Dependencies --- */
import {
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  style
} from 'styled-system'
import styled from 'styled-components'
import { compose, mapProps } from "recompose";

/* --- Local Dependencies --- */
import Box from '../Box'

/* ------ Component ------ */
const display = style({
  prop: 'display',
  cssProperty: 'display',
})

const direction = type =>({
  center: 'center'
}[type])


const Flex = styled(Box)(props => ({
  display: 'flex',
  alignItems: props.ac ? 'center' : 'initial' ,
  flexDirection: props.column ? 'column' : 'row' ,
  flexWrap: props.wrap ? 'wrap' : 'initial' ,
}),
  alignSelf,
  display,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
)

Flex.propTypes = {

}

Flex.defaultProps = {

}

const Shorthand = mapProps( props=> ({
  alignItems: props.align,
  flexDirection: props.direction,
  justifyContent: props.justify,
  ...props
}))

const FlexStyled = compose(
  Shorthand
)(Flex)

export default FlexStyled