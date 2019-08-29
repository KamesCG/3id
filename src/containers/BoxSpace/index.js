/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Avatar, BackgroundGradient, Box, Flex, Image, Heading, Span, Paragraph } from "atoms";
import { Modal } from 'components'
/* ------- Component ------- */
export default ({ label, description, image, url }) => 
<Box p={0}>
  <Flex column>
    <Box card borderTop overflow='hidden' flex={1} textAlign='center' py={'45px'}>
      <BackgroundGradient gradient='blue'/>
      <Heading color='white' fontSize={[4]} fontWeight={300}>
        {label}
      </Heading>
      <Paragraph color='white' fontSize={[1]} mb={[0]}>
        {description}
      </Paragraph>
    </Box>
    <Flex card center borderBottom flex={1} textAlign='center' p={15} py={30}>
      <Modal content={<CredentialTypeDetails/>} label='Credential Type Details'>
        <Span pointer tag bg='green' color='white' fontSize={[1]} fontWeight={500}>Open </Span>
      </Modal>
      {image &&
      <Box inlineBlock circle p={15} gradient='white' mt={-50} mx={20}>
        <Image src={image} width={[30]}/>
      </Box>
      }
      <Modal content={<CredentialTypeDetails/>} label='Credential Type Details'>
        <Span pointer tag bg='blue' color='white' fontSize={[1]} fontWeight={500}>Analyze</Span>
      </Modal>
    </Flex>
  </Flex>
</Box>

const CredentialTypeDetails = props =>
<Box card>
  
</Box>