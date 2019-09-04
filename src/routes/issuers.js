/* --- Global Dependencies --- */
import React from 'react'
import { Router } from '@reach/router'

/* --- Local Dependencies --- */
import { logoEthereum } from 'assets/images'
import { Box, Container, Flex, Heading, HorizontalRule, Span } from 'atoms'
import { Checkout, Order, Orders, Product, ProductSearch, StoreAccount } from 'views'
import { IssuerCard } from 'components'
export default () =>
<Router>
  <ProductCatalog path='/issuers' />
  {/* <StoreAccount path='/store/account/*' />
  <Checkout path='/store/checkout/*'/>
  <Product path='/store/product/:id/*'/>
  <Order path='/store/order/:id/*'/>
  <Orders path='/store/orders'/> */}
  {/* <ProductSearch path='/store/search'/> */}
</Router>


const ProductCatalog = props =>
<Box py={[70]}>
  <Container>
    <Heading>Issuers</Heading>
    <HorizontalRule my={20}/>
    <Flex gutter3 mt={40}>
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Generating Unique Credentials'
        />
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Generating Unique Credentials'
        />
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Generating Unique Credentials'
        />
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Generating Unique Credentials'
        />
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Generating Unique Credentials'
        />
      <IssuerCard
        image={logoEthereum}
        name='ConsenSys'
        tagline='Generating Unique Credentials'
        />
 
    </Flex>
  </Container>
</Box>