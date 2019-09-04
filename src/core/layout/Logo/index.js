/* --- Global Dependencies --- */
import React from "react"
import { logoIcon } from 'assets/images'
import { ButtonFlat, Box, Container, Flex, Image, Heading, Span } from 'atoms'
import { Link } from 'atomic'
import { SiteData } from 'query'

const Logo = ({ title, logo, label, ...props }) =>
<Flex align='center'>
  <Image src={logoIcon} width={35} mr={15}/>
  <Box>
    <Heading heavy fontWeight={500} fontSize={[1,1,2,3]} mb={0} level={1} >
      <Link to="/">
        {title || 'Update Title'} <Span thin>{label}</Span>
      </Link>
    </Heading>
  </Box>
</Flex>


export default props =>
<SiteData>
  <Logo {...props}/>
</SiteData>