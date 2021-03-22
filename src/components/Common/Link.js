import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to)

    const file = /\.[0-9a-z]+$/i.test(to)

    if (internal) {
        if (file) {
            return (
              <a href={to} {...other}>
                {children}
              </a>
            )
        }
        // Use Gatsby Link for internal links, and <a> for others
        return (
          <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            partiallyActive={partiallyActive}
            {...other}
          >
            {children}
          </GatsbyLink>
        )
    }

    return (
        // external links
        <a href={to} rel="noopener noreferrer" {...other}>
            {children}
        </a>
    )
}

Link.propTypes = {
    to: PropTypes.string,
    activeClassName: PropTypes.string,
    partiallyActive: PropTypes.string,
};

export default Link;