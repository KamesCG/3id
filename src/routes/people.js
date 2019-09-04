/* --- Global Dependencies --- */
import React from 'react'
import { Router } from '@reach/router'

/* --- Local Dependencies --- */
import { logoEthereum } from 'assets/images'
import { Box, Container, Flex, Heading, HorizontalRule, Span } from 'atoms'
import { Checkout, Order, Orders, Product, ProductSearch, StoreAccount } from 'views'
import { IssuerCard, BoxCard } from 'components'
import BoxProfile from '../containers/Box/BoxProfile';
export default () =>
<Router>
  <PeopleList path='/' />
</Router>


const PeopleList = props =>
<Box >
  <Flex gutter3 mt={40}>
    <BoxProfile
      address='0xf9963dbe9438a5ecb62e5e7c2c081c3d12d48dd5'
      />
    <BoxProfile
      address='0xC78Ba87a035126d40bFF69D731B2e4390fd9F36f'
      />
    <BoxProfile
      address='0x068a1a9b6da95e03b6a2716fdeee0854117300a3'
      />
  </Flex>
</Box>