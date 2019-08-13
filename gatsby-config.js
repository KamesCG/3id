const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Credentialize`,
    description: `Decentralized Application Boilerplate`,
    author: `@kamescg`,
  },
  plugins: [
    // Stripe Integration
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-env-variables`,
    //   options: {
    //     whitelist: ["APPLICATION_URL", "APPLICATION_LOGIN", "APPLICATION_REGISTER", "APPLICATION_RECOVER", "APPLICATION_UPDATE", "STRIPE_SECRET_KEY", "STRIPE_PUBLISHABLE_KEY"]
    //   },
    // },
    // File Alias
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "assets": path.resolve(__dirname, 'src/assets'),
          "atomic": path.resolve(__dirname, 'src/atomic/atoms'),
          "atoms": path.resolve(__dirname, 'src/atomic/atoms'),
          "molecules": path.resolve(__dirname, 'src/atomic/molecules'),
          "organisms": path.resolve(__dirname, 'src/atomic/organisms'),
          "components": path.resolve(__dirname, 'src/components'),
          "containers": path.resolve(__dirname, 'src/containers'),
          "views": path.resolve(__dirname, 'src/views'),
          "fields": path.resolve(__dirname, 'src/fields'),
          "forms": path.resolve(__dirname, 'src/forms'),
          "settings": path.resolve(__dirname, 'src/settings'),
          "services": path.resolve(__dirname, 'src/services'),
          "store": path.resolve(__dirname, 'src/store'),
          "theme": path.resolve(__dirname, 'src/theme'),
        },
        extensions: []
      }
    },
    // Search Engine Optimization
    `gatsby-plugin-react-helmet`,
    
    // File System
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
