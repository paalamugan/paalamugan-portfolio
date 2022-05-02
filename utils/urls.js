const url = require(`url`)
const siteUrl = process.env.SITE_URL || 'https://paalamugan.com'

const convertToAbsoluteUrl = path => url.resolve(siteUrl, path)

module.exports.urlForMarkdown = (node, fallback, absolute) => {
    // Passing a `path` property in frontmatter will overwrite the
    // slug that we build from the folder structure

    let slug = node.frontmatter.path ? node.frontmatter.path : fallback

    // Remove the site slug from the compare API
    // TODO: use env config to add compare API

    if (slug.match(/\/site\/compare\/\S*/i)) {
        slug = slug.replace(/\/site/, ``)
    }

    return absolute ? convertToAbsoluteUrl(slug) : slug
}

// Create a Gatsby-style URL for resources in Ghost. These are currently the same but they might not always be
module.exports.urlForGhostPost = (postNode, section, absolute) => {
    const path = `/${section}/${postNode.slug}/`

    return absolute ? convertToAbsoluteUrl(path) : path
}
module.exports.urlForGhostTag = (tagNode, section, absolute) => {
    const path = `/${section}/${tagNode.slug}/`

    return absolute ? convertToAbsoluteUrl(path) : path
}

module.exports.parseUrl = (href) => {
    href = href || ''

    return url.parse(href, true);
}


module.exports.convertToAbsoluteUrl = convertToAbsoluteUrl
