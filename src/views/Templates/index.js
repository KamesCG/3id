/* --- Global Dependencies --- */
import React from "react";
import { Link } from "@reach/router";
/* --- Local Dependencies --- */
import { Box, Button, Flex, Heading, HorizontalRule, Paragraph } from "atomic";
import { VerifiableCredentialTemplatesQuery } from 'containers'
/* ------- Component ------- */
export default props => 
<Flex column p={20} width={1}>
  <VerifiableCredentialTemplatesQuery/>
</Flex>