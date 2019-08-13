import { GraphQLClient, request } from 'graphql-request'

const endpoint = 'http://dapp.rapid-mesh.com/graphql'
const endpointAuth = 'http://dapp.rapid-mesh.com/v1/graphql'

const query = `
{
  getVerifiableCredentialID(id:3733) {
    id
    issuer
    issuanceDate
    vc_type
    claim
  }
}
`

const Client  = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiMHhmYTY3ZGRlOTgzNDZkNjAzM2YzZGEwYjE1N2I3MGZlODQzNGE0OGNlIiwibmFtZSI6InRlc3RuYW1lIiwiaWF0IjoxNTY1MDMzNzMxLCJleHAiOjE1NjYyNDMzMzEsImF1ZCI6Imh0dHA6Ly9kYXBwLnJhcGlkLW1lc2guY29tIiwiaXNzIjoiUmFwaWQiLCJzdWIiOiIweGZhNjdkZGU5ODM0NmQ2MDMzZjNkYTBiMTU3YjcwZmU4NDM0YTQ4Y2UifQ.fDTEKDRTCm9oFQoS5c7IK9pD8nVkyoY-yWeUg8BlIPw',
  },
})

Client.request(query)
.then(res => {
  console.log(res, 'Query')
})
.catch(err => {
  console.log(err)
})

export default Client