import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

import ImageMeta from './ImageMeta'

const WebsiteMeta = ({ data, canonical, title, description, image, type }) => (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonical} />
                <link rel="preload" type="image/jpg" href={canonical + 'static/bg-icon-0cbb7933901a40c79c2c03381b14aca5.jpg'} as="image" />
                <meta property="og:site_name" content={data.site.siteMetadata.title} />
                <meta property="og:site_description" content={data.site.siteMetadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={canonical} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:url" content={canonical} />
                <meta name="twitter:site" content="@trypaalamugan" />
                <script type="application/ld+json">{`
                    {
                        "@context": "https://schema.org/",
                        "@type": ${type && type === `series` ? `"Series"` : `"WebSite"`},
                        "url": "${canonical}",
                        "image": {
                            "@type": "ImageObject",
                            "url": "${image}",
                            "width": 1000,
                            "height": 563
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${data.site.siteMetadata.siteUrl}"
                        },
                        "description": "${description}"
                    }
                `}</script>
            </Helmet>
            <ImageMeta image={image} />
        </>
)

// "publisher": {
//     "@type": "Organization",
//         "name": "Paalamugan",
//             "logo": {
//         "@type": "ImageObject",
//             "url": "https://paalamugan.tk/favicon.ico",
//                 "width": 60,
//                     "height": 60
//     }
// },

WebsiteMeta.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                siteUrl: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    canonical: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`website`, `series`]).isRequired,
}

export default WebsiteMeta
