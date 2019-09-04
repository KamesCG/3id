/* --- Global Dependencies --- */
import React from 'react'
import { Router } from '@reach/router'

/* --- Local Dependencies --- */
import { logoEthereum, logoConsensys, logoCivil, logoAlpine } from 'assets/images'
import { Box, Container, Flex, Heading, HorizontalRule, Span } from 'atoms'
import { Checkout, Order, Orders, Product, ProductSearch, StoreAccount } from 'views'
import { IssuerCard } from 'components'
export default () =>
<>
<Router>
  <ProductCatalog path='/' />
</Router>
</>


const ProductCatalog = props =>
<Box >
    <Flex gutter3 mt={40}>
      <IssuerCard
        image={logoCivil}
        name='Civil'
        tagline='A Trusted News Source'
        />
      <IssuerCard
        image={logoAlpine}
        name='Alpine'
        tagline='Authentication Systems'
        />
      <IssuerCard
        image={logoConsensys}
        name='ConsenSys'
        tagline='Completing Quests'
        />
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Building Open Source'
        />

 
    </Flex>
</Box>