const path = require(`path`)
const fs   = require('fs')
const { allMarkdownPosts } = require(`../utils/node-queries`)

module.exports.createRedirects = ({ actions }) => {
    const { createRedirect } = actions

    // The /concepts page doesn't exist, we need to redirect to
    // the first post of this section
    // createRedirect({
    //     fromPath: `/`,
    //     isPermanent: true,
    //     redirectInBrowser: true,
    //     toPath: `/`,
    // })
}

module.exports.createMarkdownPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queryPromises = []

    queryPromises.push(new Promise((resolve, reject) => {
        graphql(allMarkdownPosts())
            .then((result) => {

                if (result.errors) {
                    return reject(result.errors)
                }

                return result.data.allMarkdownRemark.edges.forEach(({ node }) => {

                    if (!node.frontmatter.template) {
                        throw new Error(`template property missing in ${node.frontmatter.layout || node.fields.slug} markdown file`)
                    }

                    const DocTemplate = path.resolve(`./src/templates/markdown/${node.frontmatter.template}.js`)

                    if (!fs.existsSync(DocTemplate)) {

                        throw new Error(`template ${node.frontmatter.template} file is not found`)
                    }

                    createPage({
                        path: node.fields.slug,
                        component: DocTemplate,
                        context: {
                            // Data passed to context is available
                            // in page queries as GraphQL variables.
                            slug: node.fields.slug,
                            section: node.fields.section
                        },
                    })
                    return resolve()
                })
            })
    }))

    return Promise.all(queryPromises)
}
