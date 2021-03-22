import PropTypes from 'prop-types'

export const getPostHeaderConfig = ({ pathname }) => {
    const postHeaderConfig = {
        bgClass: `bg-api-reference`,
    }

    // TODO: make this nice and DRY

    // // Handlebars
    // if (pathname.match(/^\/api\//i)) {
    //     postHeaderConfig.title = `API Reference`
    //     postHeaderConfig.mainLink = `/api/`
    //     if (pathname.match(/\/gatsby\//i)) {
    //         postHeaderConfig.subtitle = `Gatsby`
    //         postHeaderConfig.subLink = `/api/gatsby/`
    //     }
    //     if (pathname.match(/\/content\//i)) {
    //         postHeaderConfig.subtitle = `Content`
    //         postHeaderConfig.subLink = `/api/content/`
    //     }
    // }

    // // Setup
    // if (pathname.match(/^\/setup\//i)) {
    //     postHeaderConfig.title = `Setup Guide`
    //     postHeaderConfig.mainLink = `/setup/`
    //     postHeaderConfig.bgClass = `bg-setup`
    //     if (pathname.match(/\/local\//i)) {
    //         postHeaderConfig.subtitle = `Local`
    //         postHeaderConfig.subLink = `/setup/local/`
    //     }
    // }

    // // Core Concepts
    // if (pathname.match(/^\/concepts\//i)) {
    //     postHeaderConfig.title = `Core Concepts`
    //     postHeaderConfig.mainLink = `/concepts/introduction/`
    //     postHeaderConfig.bgClass = `bg-concepts`
    // }

    return postHeaderConfig
}

getPostHeaderConfig.proptypes = {
    pathname: PropTypes.string.isRequired,
}

export default getPostHeaderConfig
