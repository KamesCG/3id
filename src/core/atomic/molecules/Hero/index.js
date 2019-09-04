import React from "react"
import { Link } from "gatsby"

import {
  BackgroundImage, BackgroundGradient,
  Box, Flex, Image, Heading, Paragraph, Span
} from 'atoms'
import { bgDots, bgShadow, iphoneCut, videoThumbnail } from 'assets/images' 

const Hero = ({ title, tagline }) =>
<Flex center column color='white' py={[60, 100, 220]}>
  <BackgroundGradient gradient='blue'/>
  <BackgroundImage src={bgShadow} opacity={1} ratio={0.35} />
  <BackgroundImage src={bgDots} opacity={0.7} ratio={0.35} />
  <Heading  fontSize={[4,4,5]} fontWeight={300}>
    {title}
  </Heading>
  <Paragraph fontSize={[3]} textAlign='center' fontWeight={300}>
    {tagline}
  </Paragraph>
</Flex>

export default Hero