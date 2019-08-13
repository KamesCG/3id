/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Box, Button, Flex, Heading, Span } from "atomic";

/* ------- Component ------- */
export default props => 
<>
<Flex align='center' between borderBottom='1px solid' borderColor='gray'>
  <Box>
    {/* <Heading color='blue' fontSize={[3]} mb={0} >
      Verifiable Credential
    </Heading>
    <Heading color='grayDark' fontSize={[1]} mt='5px'>
      Description of the Verifiable Credential and claims...
    </Heading> */}
  </Box>
  <Flex column>
    <Span>Subject: 0x5FL23...1VI5Z</Span>
    <Span>Issuer: 0x5FL23...1VI5Z</Span>
  </Flex>
  <Box>
    <Button color='white' gradient='blue' fontSize={1} >View Claim(s)</Button>
  </Box>
</Flex>

</>