// Search Nested Folders
const granchildren = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)
granchildren.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = granchildren(key).default
})