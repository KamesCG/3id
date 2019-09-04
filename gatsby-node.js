const plugins = require('./gatsby-plugin-config')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Create Single Pages
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
  if (page.path.match(/^\/issuers/)) {
    page.matchPath = `/issuers/*`
    createPage(page) // Update the page.
  }
  if (page.path.match(/^\/profile/)) {
    page.matchPath = `/profile/*`
    createPage(page) // Update the page.
  }
  if (page.path.match(/^\/profiles/)) {
    page.matchPath = `/profiles/*`
    createPage(page) // Update the page.
  }
}

// Create Multiple Pages
exports.createPages = async ({ actions, graphql }) => {
  await plugins.CreateDocumentation(actions, graphql)
  // await plugins.CreateProduct(actions, graphql)
}

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `StrapiDocumentation`) {}
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /IDBIndex/,
            use: loaders.null(),
          },
          {
            test: /3box/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

