/* --- Global Dependencies --- */
import React from 'react'
import { Router } from '@reach/router'

/* --- Local Dependencies --- */
import { logoEthereum, logoConsensys, logoCivil, logoAlpine } from 'assets/images'
import { Box, Flex} from 'atoms'
import { CredentialCard, IssuerCard } from 'components'
export default () =>
<>
<Router>
  <ProductCatalog path='/' />
</Router>
</>


const ProductCatalog = props =>
<Box >
    <Flex column>
      <CredentialCard
        image={logoCivil}
        name='CivilCredential'
        issuer='Civil'
        tagline='A standard Civil Credential'
        />
      <CredentialCard
        image={logoAlpine}
        name='AlpineCredential'
        issuer='Alpine'
        tagline='A standard Alpine Credential'
        />
      <CredentialCard
        image={logoConsensys}
        name='MeshCredential'
        issuer='ConsenSys'
        tagline='A standard Mesh Credential'
        />
      <CredentialCard
        image={logoConsensys}
        name='MeshCredential'
        tagline='A standard Mesh Credential'
        />


 
    </Flex>
</Box>