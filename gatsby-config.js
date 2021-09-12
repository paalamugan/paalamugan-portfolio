const postcssCustomMedia = require(`postcss-custom-media`)
const autoprefixer = require(`autoprefixer`)
const cssVariables = require(`postcss-css-variables`)
const colorModFunction = require(`postcss-color-mod-function`)
const cssNano = require(`cssnano`)
const customProperties = require(`postcss-custom-properties`)
const easyImport = require(`postcss-easy-import`)
const algoliaQueries = require(`./utils/algolia-queries`)
const path = require(`path`)

const NODE_ENV = process.env.NODE_ENV || `development`;

require(`dotenv`).config({
    path: `.env.${NODE_ENV}`,
})

if (!process.env.SITE_URL) {
    throw new Error(
        `SITE_URL are required to build.`
    )
}

const SERVICE_WORKER_KILL_SWITCH = process.env.SERVICE_WORKER_KILL_SWITCH == `true`;

const plugins = [
    /**
     *  Content Plugins
     */
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: path.join(__dirname, `content`),
            name: `markdown-pages`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: path.join(__dirname, `src`, `assets`, `images`),
            name: `images`,
        },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        withWebp: true,
                    },
                },
                {
                    resolve: `gatsby-remark-snippets`,
                    options: {
                        // Example code links are relative to this dir.
                        // eg examples/path/to/file.js
                        directory: `${__dirname}/snippets/`,
                    },
                },
                {
                    resolve: `gatsby-remark-embed-snippet`,
                    options: {
                        // Example code links are relative to this dir.
                        // eg examples/path/to/file.js
                        directory: `${__dirname}/snippets/`,
                    },
                },
                `gatsby-remark-autolink-headers`,
                `gatsby-remark-code-titles`,
                `gatsby-remark-prismjs`,
                `gatsby-remark-external-links`,
            ],
        },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    /**
     *  Utility Plugins
     */
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `PaalaMugan Site`,
            short_name: `PaalaMugan`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `static/images/logo.png`, // This path is relative to the root of the site.
        },
    },
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-plugin-sitemap`, // gatsby-plugin-advanced-sitemap
        options: {
            // query: `
            //     {
            //     allMarkdownRemark {
            //         edges {
            //             node {
            //                 id
            //                 frontmatter {
            //                     template
            //                 }
            //                 fields {
            //                     slug
            //                 }
            //             }
            //         }
            //     }
            // }`,
            // mapping: {
            //     allMarkdownRemark: {
            //         sitemap: `pages`,
            //     },
            // },
            exclude: [
                `/dev-404-page`,
                `/404`,
                `/404.html`,
                `/offline-plugin-app-shell-fallback`,
                `/data-schema`,
                `/README`,
                `/common`,
                `/(\/)?hash-\S*/`, // exclude internal tags
            ],
        },
    },
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-sass`,
    /**
     *  Display Plugins
     */
    {
        resolve: `gatsby-plugin-postcss`,
        options: {
            postCssPlugins: [
                autoprefixer(),
                easyImport(),
                cssVariables(),
                colorModFunction(),
                customProperties({ preserve: false }),
                postcssCustomMedia(),
                cssNano({ zindex: false }),
            ],
        },
    },
    {
        resolve: `gatsby-plugin-react-svg`,
        options: {
            rule: {
                include: /icons/,
            },
        },
    },
]

const runAlgoliaBuild = () => (process.env.INCOMING_HOOK_TITLE && process.env.INCOMING_HOOK_TITLE === `Algolia`) || process.env.ALGOLIA
const hasAlgoliaKey = () => process.env.ALGOLIA_ADMIN_KEY && !process.env.ALGOLIA_ADMIN_KEY.match(/<key>/)

if (runAlgoliaBuild() && hasAlgoliaKey()) {
    plugins.push({
        resolve: `gatsby-plugin-algolia`,
        options: {
            appId: `6RCFK5TO89`,
            apiKey: `${process.env.ALGOLIA_ADMIN_KEY}`,
            queries: algoliaQueries,
            chunkSize: 10000, // default: 1000
        },
    })
}

// Global switch to either use or remove service worker
if (SERVICE_WORKER_KILL_SWITCH) {
    console.log(`Remove service worker plugin`)
    plugins.push(`gatsby-plugin-remove-serviceworker`)
} else {
    console.log(`Install service worker plugin`)
    plugins.push(`gatsby-plugin-offline`)
}

module.exports = {
    siteMetadata: {
        title: `Paalamugan Portfolio`,
        author: `Paalamugan`,
        siteUrl: process.env.SITE_URL || `https://paalamugan.tk`,
        description: `Paalamugan Portfolio`,
    },
    // flags: { PRESERVE_WEBPACK_CACHE: true, FAST_DEV: true, DEV_SSR: true },
    plugins: plugins,
    mapping: {
        'MarkdownRemark.frontmatter.common': `MarkdownRemark.frontmatter.layout`,
    },
}
