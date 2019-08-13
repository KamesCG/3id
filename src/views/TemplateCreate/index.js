/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Box, Container, HorizontalRule, Heading } from "atomic";
import FormVerifiableCredentialTemplate from 'forms/FormVerifiableCredentialTemplate'
/* ------- Component ------- */
export default props => 
<Box>
  <Heading fontSize={[2,2,3]} textAlign='center'>
    Create Verifiable Credential Template
  </Heading>
  <HorizontalRule my={20}/>
  <Box p={20}>
    <Container width={[600]}>
      <FormVerifiableCredentialTemplate/>
    </Container>
  </Box>
</Box>