/* --- Global Dependencies --- */
import idx from 'idx'
import styled from 'styled-components'
import is from 'styled-is';
import { alignItems, alignSelf, flexWrap, flexDirection, justifyContent, style } from 'styled-system'
import { compose, mapProps } from "recompose";
import { up, down, between, only } from 'styled-breakpoints';
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

${is('row')`
  flex-direction: row; /* default */
`};

${is('rowReverse')`
  flex-direction: row-reverse;
`};

${is('column')`
  flex-direction: column;
`};

${is('columnReverse')`
  flex-direction: column-reverse;
`};

/*********************************** wrap ***********************************/
/**************** http://cssreference.io/property/flex-wrap ****************/

${is('nowrap')`
  flex-wrap: nowrap; /* default */
`};

${is('wrap')`
  flex-wrap: wrap;
`};

${is('wrapReverse')`
  flex-wrap: wrap-reverse;
`};

/***************************** justify-content *****************************/
/************* http://cssreference.io/property/justify-content *************/

${is('justifyStart')`
  justify-content: flex-start; /* default */
`};

${is('justifyEnd')`
  justify-content: flex-end;
`};

${is('justifyCenter')`
  justify-content: center;
`};

${is('justifyBetween')`
  justify-content: space-between;
`};

${is('justifyAround')`
  justify-content: space-around;
`};

/****************************** align-content ******************************/
/************** http://cssreference.io/property/align-content **************/

${is('contentStart')`
  align-content: flex-start;
`};

${is('contentEnd')`
  align-content: flex-end;
`};

${is('contentCenter')`
  align-content: center;
`};

${is('contentSpaceBetween')`
  align-content: space-between;
`};

${is('contentSpaceAround')`
  align-content: space-around;
`};

${is('contentStretch')`
  align-content: stretch; /* default */
`};

/******************************* align-items *******************************/
/*************** http://cssreference.io/property/align-items ***************/

${is('alignStart')`
  align-items: flex-start;
`};

${is('alignEnd')`
  align-items: flex-end;
`};

${is('alignCenter')`
  align-items: center;
`};

${is('alignBaseline')`
  align-items: baseline;
`};

${is('alignStretch')`
  align-items: stretch;
`};

/******************************** utilities ********************************/
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

  ${is('between')`
  justify-content: space-between;
  `};

  ${is('evenly')`
  justify-content: space-evenly;
  `};

  ${is('wrap')`
    flex-wrap: wrap;
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

  ${is('justifyCenter')`
    justify-content: center;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};
  /******************************** Gutter ********************************/

  ${is('gutter2')`
    flex-wrap: wrap;
    & > * {
      flex: 1;
      width: 45%;
      margin-right: 30px;
    }
    & > *:nth-child(2) {
      margin-right: 0;
    }

    & > *:nth-child(n+3) {
      margin-top: 20;
    }

    ${down('tablet')} {
      & > * {
        margin: 0;
        width: 100;
      }
    }

  `};
  ${is('gutter3')`
    flex-wrap: wrap;
    & > * {
      width: 30%;
      margin-right: 5%;
    }
    & > *:nth-child(3n) {
      align-self: flex-end;
      margin-right: 0;
    }
    & > *:nth-child(n+4) {
      margin-top: 50px;
    }
  `};
  ${is('gutter4')`
    flex-wrap: wrap;
    & > * {
      flex: 1;
      width: 22%;
      margin-right: 30px;
    }
    & > *:nth-child(4) {
      margin-right: 0;
    }
    & > *:nth-child(n+5) {
      margin-top: 30px;
    }

    ${down('desktop')} {
      flex-wrap: wrap;
      & > * {
        width: 45%;
        margin-right: 30px;
      }
      & > *:nth-child(2) {
        margin-right: 0;
      }

      & > *:nth-child(n+3) {
        margin-top: 20px;
      }
    }

    ${down('tablet')} {
      & > * {
        margin: 0;
        width: 100% !important;
      }
      & > *:nth-child(n+1) {
        margin-top: 10px;
      }
    }
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