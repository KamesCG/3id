/* --- Global Dependencies --- */
import React from 'react'
import { Router } from '@reach/router'

/* --- Local Dependencies --- */
import { Checkout, Order, Orders, Product, ProductSearch, StoreAccount } from 'views'
export default () =>
<Router>
  <StoreAccount path='/store/account/*' />
  <Checkout path='/store/checkout/*'/>
  <Product path='/store/product/:id/*'/>
  <Order path='/store/order/:id/*'/>
  <Orders path='/store/orders'/>
  <ProductSearch path='/store/search'/>
</Router>