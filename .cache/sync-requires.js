const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-views-issuer-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/views/Issuer/index.js"))),
  "component---src-views-documentation-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/views/Documentation/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/404.js"))),
  "component---src-pages-account-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/account.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/dashboard.js"))),
  "component---src-pages-identity-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/identity.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/index.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/profile.js"))),
  "component---src-pages-token-js": hot(preferDefault(require("/Users/admin/Documents/projects/rapid/code/rapid-dapp-frontend/src/pages/token.js")))
}

