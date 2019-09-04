import React from "react"
import { Link } from "gatsby"

import {
  Container,
  Box, Flex, Image, Heading, Paragraph, Span
} from 'atoms'
import { SEO } from "components"
import { Documentation } from 'layout'
import { DocumentationList } from 'query'
const SecondPage = () => (
  <Documentation>
    <Container py={50}>
      <SEO title="Get Started" />
      <h1>Documentation</h1>
      <DocumentationList/>
    </Container>
  </Documentation>
)

export default SecondPage
