import React from "react"
import { Link } from "gatsby"

import {
  Container,
  Box, Flex, Image, Heading, Paragraph, Span
} from 'atoms'
import { SEO } from "components"
import { Site } from 'layout'
import { Profile } from 'templates'
const SecondPage = () => (
  <Site>
    <Profile/>
  </Site>
)

export default SecondPage
