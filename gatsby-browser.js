/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const onRouteUpdate = require(`./gatsby/onRouteUpdate`)
const onPreRouteUpdate = require(`./gatsby/onPreRouteUpdate`)

exports.onRouteUpdate = () => onRouteUpdate.trustAllScripts()

exports.onPreRouteUpdate = () => onPreRouteUpdate.killServiceWorker()