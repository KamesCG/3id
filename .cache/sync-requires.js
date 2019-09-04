const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-documentation-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/templates/Documentation/index.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/404.js"))),
  "component---src-pages-account-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/account.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/dashboard.js"))),
  "component---src-pages-documentation-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/documentation/index.js"))),
  "component---src-pages-documentation-api-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/documentation/api.js"))),
  "component---src-pages-documentation-guides-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/documentation/guides.js"))),
  "component---src-pages-documentation-tutorials-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/documentation/tutorials.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/index.js"))),
  "component---src-pages-issuers-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/issuers/index.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/profile.js"))),
  "component---src-pages-template-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/template.js")))
}

