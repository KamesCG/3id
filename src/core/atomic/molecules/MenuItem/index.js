import React from "react"
import styled from 'styled-components'
import {
  Flex, Image, Span
} from 'atoms'

const StyledMenuWrapper = styled.a`
  padding: 40px 10px;
  &:hover { 
    background-color: #1515150d;
  }
`

const MenuItem = ({ alias, label, image}) =>
<StyledMenuWrapper href={`#${alias}`}>
<Flex center column>
  <Image src={image} width={60}/>
  <Span fontSize={[2]} textAlign='center'>{label}</Span>
</Flex>
</StyledMenuWrapper>

export default MenuItem