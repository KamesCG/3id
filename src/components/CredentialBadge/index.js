/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Avatar, BackgroundGradient, Box, Flex, Image, Heading, Span, Paragraph } from "atoms";
import { Modal } from 'components'
/* ------- Component ------- */
export default ({ label, description, image, url }) => 
<Box p={0}>
  <Flex column>
    <Box card borderTop overflow='hidden' flex={1} textAlign='center' p={'5px'}>
      <BackgroundGradient gradient='orange'/>
    </Box>
    <Box card borderBottom flex={1} textAlign='center' p={15} py={30}>
    {image &&
      <Box inlineBlock circle boxShadow='0px -6px 7px -5px #d6d6d6, 0px -3px 2px -2px #fd6510' p={25} gradient='white' mt={-90}>
        <Image src={image} width={[50]}/>
      </Box>
      }
      <Heading fontSize={[4]} fontWeight={300}>
        {label}
      </Heading>
      <Paragraph fontSize={[1]} mb={[25]}>
        {description}
      </Paragraph>
      <Modal content={<CredentialTypeDetails/>} label='Credential Type Details'>
        <Span pointer tag bg='green' color='white' fontSize={[1]} fontWeight={500}>	Details</Span>
      </Modal>
    </Box>
  </Flex>
</Box>

const CredentialTypeDetails = props =>
<Box card>
  
</Box>