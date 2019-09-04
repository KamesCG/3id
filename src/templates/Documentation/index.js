import React from "react"
import ReactMarkdown from 'react-markdown'
import { Link } from "gatsby"

import {
  BackgroundGradient, Container, HorizontalRule,
  Box, Flex, Image, Heading, Paragraph, Span
} from 'atoms'
import { SEO } from "components"
import { Documentation } from 'layout'

export default (props) => {
  const { title, tagline, content } = props.pageContext
  const regex = /\[([^\[]+)\](\(.*\))/gm
  const singleMatch = /\[([^\[]+)\]\((.*)\)/
  const matches = content.match(regex)
  const index = Array.isArray(matches) ? matches.map(match => singleMatch.exec(match) ) : []

  return (
  <>
  <SEO title={title} />
  <Documentation>
      <Flex color='white' column p={50}>
      <BackgroundGradient gradient='purpink' gradientDir={-45} />
        <Heading fontSize={[5]}>
          {title}
        </Heading>
        <Heading fontSize={[2]}>
          {tagline}
        </Heading>
      </Flex>
      <Flex fullWidth pt={[30]} pr={[50]}>
        <Box flex={4}>
        <Container left width={[1,1, 1]}>
          <ReactMarkdown source={content} />
          <Link to="/">Go back to the homepage</Link>
        </Container>
        </Box>
        <Box flex={2}>
          <Box card width={1}>
            <Heading sm thin>
              Page Index
            </Heading>

            <HorizontalRule my={10}/>
            {
              Array.isArray(index) && 
              <Flex column>
                {index.map( item=>
                  <Span mb={10}><a href={item[2]}>{item[1]}</a></Span>
                )}
              </Flex>
            }
          </Box>
        </Box>
      </Flex>
  </Documentation>
  </>)
}
