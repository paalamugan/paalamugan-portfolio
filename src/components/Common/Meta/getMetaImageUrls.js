import PropTypes from 'prop-types';
import url from 'url';

// TODO: this should be available as global var without the need to query
// the siteMetadata.
const SITEURL = process.env.SITE_URL;

const imageUrls = {
    default: url.resolve(SITEURL || ``, `/images/logo.png`),
}

export const getMetaImageUrls = (section) => {
    // Set the default image if no section is passed
    section = section || `default`

    return imageUrls[section];
}

getMetaImageUrls.propTypes = {
    section: PropTypes.string.isRequired,
};

export default getMetaImageUrls;

