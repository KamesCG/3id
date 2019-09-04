const path = require('path')

exports.CreateDocumentation = async(actions, graphql) => {
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
            content
          }
        }
      }
    }
    `)
  
    try {
      // Create Aritcle
      request.data.allStrapiDocumentation.edges.forEach(({ node }) => {
        actions.createPage({
          path: `documentation/${node.alias}`,
          component: path.resolve(`./src/templates/Documentation/index.js`),
          context: node,
        })
      })

      return true
  
    } catch (error) {
      console.log(error)
      return false
    }
}

exports.CreateProduct = async(actions, graphql) => {
  const request = await graphql(
    `
    {
      allStrapiProduct {
        edges {
          node {
            id
            alias
            title
            tagline
            content
            price
            summary
            thumbnail {
              publicURL
            }
            images {
              localFile{
                publicURL
              }
            }
            imageFeatured {
              publicURL
            }
          }
        }
      }
    }
    `)
  
    try {
      // Create Aritcle
      request.data.allStrapiProduct.edges.forEach(({ node }) => {
        actions.createPage({
          path: `store/product/${node.alias}`,
          component: path.resolve(`./src/templates/Product/index.js`),
          context: node,
        })
      })

      return true
  
    } catch (error) {
      console.log(error)
      return false
    }
}