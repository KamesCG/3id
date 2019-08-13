/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages only on the client.
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = `/dashboard/*`
    createPage(page) // Update the page.
  }
  
  if (page.path.match(/^\/account/)) {
    page.matchPath = `/account/*`
    createPage(page) // Update the page.
  }
}