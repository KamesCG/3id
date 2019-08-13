const req = require.context('.', true, /\.\/devices\/[^/]+\.(jpg|jpeg|png|gif)$/)
req.keys().forEach((key) => {
  const fileName = key.replace(/^.+\/([^/]+)\.(jpg|jpeg|png|gif)/, '$1')
  module.exports[fileName] = req(key)
})