const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Webpack
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    },
    // loader: [{
    //   test: /\.js$/,
    //   exclude: __dirname + 'node_modules',
    //   loader: "babel-loader"
    // }],
    
    module: {
      
      rules: [
        // {
        //   test: /\.mdx?$/,
        //   use: [
        //     'babel-loader',
        //     '@mdx-js/loader'
        //   ]
        // }
        {
          test: /\.jsx?$/,
          // Exclude all node_modules from transpilation, except for 'swiper' and 'dom7'
          exclude: modulePath =>
            /node_modules/.test(modulePath) &&
            !/node_modules\/(swiper|dom7)/.test(modulePath),
        },
      ],
    },
    plugins: [
      
    ],
  })
}




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


// Create Multiple Pages
exports.createPages = async ({ actions, graphql }) => {
  await CreateIssuers(actions, graphql)
  await CreateDocumentation(actions, graphql)
}


const CreateDocumentation = async (actions, graphql) => {
  const request = await graphql(
    `
    {
      allStrapiDocumentation {
        edges {
          node {
            id
            alias
            title
            tagline
            body
          }
        }
      }
    }
    `)
  
    try {
      // Create Aritcle
      request.data.allStrapiDocumentation.edges.forEach(({ node }) => {
        actions.createPage({
          path: `docs/${node.alias}`,
          component: path.resolve(`./src/views/Documentation/index.js`),
          context: node,
        })
      })

      return true
  
    } catch (error) {
      console.log(error)
      return false
    }
}

const CreateIssuers = async (actions, graphql) => {
  const request = await graphql(
    `
    {
      allStrapiIssuer {
        edges {
          node {
            id
            name
            did
            body
          }
        }
      }
    }
    `)
  
    try {
      // Create Aritcle
      request.data.allStrapiIssuer.edges.forEach(({ node }) => {
        actions.createPage({
          path: `issuer/${node.id}`,
          component: path.resolve(`./src/views/Issuer/index.js`),
          context: node,
        })
      })

      return true
  
    } catch (error) {
      console.log(error)
      return false
    }
}