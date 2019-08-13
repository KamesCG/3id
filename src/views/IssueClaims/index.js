/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Box, Container, Flex, Heading } from "atomic";
import { FormVerifiableCredentialIssue } from 'forms'

import FormVerifiableCredentialTemplate from 'forms/FormVerifiableCredentialTemplate'
/* ------- Component ------- */
export default props => 
<Box>
  <Flex center column color='white' gradient='blue' p={30} >
    <Heading fontSize={[4,4,5]}>
      Create Verifiable Credential Template
    </Heading>

  </Flex>
  <Box p={20}>
    <Container width={[600]}>
      <FormVerifiableCredentialIssue/>
    </Container>
  </Box>
</Box>