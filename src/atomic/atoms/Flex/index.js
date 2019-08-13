/* --- Global Dependencies --- */
import idx from 'idx'
import styled from 'styled-components'
import is from 'styled-is';
import { alignItems, alignSelf, flexWrap, flexDirection, justifyContent, style } from 'styled-system'
import { compose, mapProps } from "recompose";

/* --- Local Dependencies --- */
import Box from '../Box'


/* ------ Component ------ */
const display = style({
  prop: 'display',
  cssProperty: 'display',
})

const Flex = styled(Box)`
  display: flex;
  ${alignSelf}
  ${alignItems}
  ${display}
  ${flexWrap}
  ${flexDirection}
  ${justifyContent}
  
  ${is('listHorizontal')`
    & > * {
      margin-right: 22.5px;
    }
  `};
  
  ${is('listColumn')`
      & > * {
        margin-bottom: 15px;
      }
  `};
  ${is('listColumnLarge')`
      & > * {
        margin-bottom: 25px;
      }
  `};
  ${is('listColumnSmall')`
      & > * {
        margin-bottom: 8px;
      }
  `};

  ${is('row')`
    flex-direction: row; /* default */
  `};

  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};

  ${is('between')`
    justify-content: space-between;
  `};

  ${is('evenly')`
    justify-content: space-evenly;
  `};

  ${is('column')`
    flex-direction: column;
  `};

  ${is('wrap')`
    flex-wrap: wrap;
  `};
  
  ${is('columnReverse')`
    flex-direction: column-reverse;
  `};
  ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};
  ${is('center')`
    align-items: center;
    justify-content: center;
  `};
`

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