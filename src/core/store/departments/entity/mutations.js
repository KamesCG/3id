export const userListQuery = filters => `
{
  userList {
    id
    name
    email
    type
  }
}
`