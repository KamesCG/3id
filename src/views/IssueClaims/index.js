/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Box, Container, Flex, Heading } from "atomic";
import { FormVerifiableCredentialIssue } from 'forms'

import FormVerifiableCredentialTemplate from 'forms/FormVerifiableCredentialTemplate'
/* ------- Component ------- */
export default props => 
<Box>
  <Container width={[600]}>
    <FormVerifiableCredentialIssue/>
  </Container>
</Box>