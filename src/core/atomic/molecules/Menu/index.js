import React from "react"
import styled from 'styled-components'
import { Flex } from 'atoms'

export default styled(Flex)`
  width: 100%;
  & > * {
    flex: 1
  }

  & > * {
    margin-right: 20px;
  }


  & > *:last-child {
    margin-right: 0;
  }
`