const path = require('path')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: "/rapid-dapp-frontend",
  siteMetadata: {
    title: `3ID`,
    tagline: `Decentralized Application Starterkit`,
    description: `Decentralized Application Starterkit`,
    siteUrl: 'https://rapid-mesh.com',
    url: 'https://rapid-mesh.com',
    author: 'Rapid',
    twitter: 'Rapid',
    facebook: 'Rapid',
    linkedin: 'Rapid'
  },
  plugins: [
    `gatsby-plugin-breadcrumb`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "assets": path.resolve(__dirname, 'src/assets'),
          "atomic": path.resolve(__dirname, 'src/core/atomic'),
          "atoms": path.resolve(__dirname, 'src/core/atomic/atoms'),
          "molecules": path.resolve(__dirname, 'src/core/atomic/molecules'),
          "organisms": path.resolve(__dirname, 'src/core/atomic/organisms'),
          "components": path.resolve(__dirname, 'src/components'),
          "contracts": path.resolve(__dirname, 'src/contracts'),
          "containers": path.resolve(__dirname, 'src/containers'),
          "context": path.resolve(__dirname, 'src/core/context'),
          "helpers": path.resolve(__dirname, 'src/core/helpers'),
          "layout": path.resolve(__dirname, 'src/core/layout'),
          "views": path.resolve(__dirname, 'src/views'),
          "fields": path.resolve(__dirname, 'src/core/fields'),
          "forms": path.resolve(__dirname, 'src/forms'),
          "settings": path.resolve(__dirname, 'src/core/settings'),
          "services": path.resolve(__dirname, 'src/core/services'),
          "static": path.resolve(__dirname, 'src/core/static'),
          "store": path.resolve(__dirname, 'src/core/store'),
          "storeRedux": path.resolve(__dirname, 'src/core/store'),
          "theme": path.resolve(__dirname, 'src/core/theme'),
          "routes": path.resolve(__dirname, 'src/routes'),
          "query": path.resolve(__dirname, 'src/query'),
          "templates": path.resolve(__dirname, 'src/templates'),
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/assets/svg`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `horizin`,
        short_name: `horizin`,
        start_url: `/`,
        background_color: `#366adc`,
        theme_color: `#366adc`,
        display: `minimal-ui`,
        icon: `src/core/images/gatsby-icon.png`,
      },
    },
    // Strapi
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [ 'documentation'],
      },
    },
    /**
     * Generate Pages from Content Management System
     * @description Connect to Strapi API to request latest content for build.
     */
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "articleExternal",
    //     // This is the field under which it's accessible
    //     fieldName: "article",
    //     // URL to query from
    //     url: "http://localhost:1337/graphql",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
