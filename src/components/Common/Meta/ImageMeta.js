import React from 'react'
import Helmet from "react-helmet"
import PropTypes from 'prop-types'

const ImageMeta = ({ image }) => (
    <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
        {/* These are the image sizes of the SEO feature images */}
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="523" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
    </Helmet >
)

ImageMeta.propTypes = {
    image: PropTypes.string.isRequired,
}

export default ImageMeta
