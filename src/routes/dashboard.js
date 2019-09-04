/* --- Global Dependencies --- */
import React from 'react'
import { Router } from '@reach/router'

/* --- Local Dependencies --- */
import {
  Account,
  Dashboard,
  VerifiableCredentials,
  ClaimsSearch,
  People,
  IssuerList,
  Search, IssueClaims, Templates, TemplateCreate, Roles,
  MenuAside
} from 'views'

export default () =>
<Router>
  <Dashboard path="/dashboard" />
  <ClaimsSearch path="/dashboard/search/*" />
  <VerifiableCredentials path="/dashboard/credentials/*" />

  <Account path="/dashboard/account/*" />
  {/* <Search path="/dashboard/search/*" /> */}
  <People path="/dashboard/people" />

  <IssueClaims path="/dashboard/issue" />
  <IssuerList path="/dashboard/issuers/*" />

  <Templates path="/dashboard/templates" />
  <TemplateCreate path="/dashboard/templates/create" />
  <Roles path="/dashboard/roles" />
</Router>