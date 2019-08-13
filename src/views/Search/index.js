/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Box, HorizontalRule } from "atomic";
import { VerifiableCredentialQuery } from 'containers'
import FormVerifiableCredentialSearch from 'forms/FormVerifiableCredentialSearch'

/* ------- Component ------- */
export default props => 
<Box p={20}>
  <FormVerifiableCredentialSearch styled={{mx: 'auto', px: 30, py: 20}}/>
  <HorizontalRule my={20}/>
  <VerifiableCredentialQuery/>
</Box>