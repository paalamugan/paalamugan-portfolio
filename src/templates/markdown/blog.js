// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

// import { modifiedGraphqlData } from '../../utils/constant';
// import { mandatoryProps } from '../../utils/propTypes';

// const Blog = ({ data, location }) => {

//     data = modifiedGraphqlData(data);

//     return (<h2>My Blog</h2>)
// }

// Blog.propTypes = mandatoryProps;

// export default Blog;

// export const BlogQuery = graphql`
//     query($slug: String!) {
//         site {
//             ...SiteMetaFields
//         }
//         markdownRemark(fields: { slug: {eq: $slug}}) {
//             ...SiteBlogMarkdownFields
//         }
//     }
// `