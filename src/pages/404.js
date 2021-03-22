import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Home } from '../components/Layout';
import { Icon, Link } from '../components/Common';
import { mandatoryProps } from '../utils/propTypes';

import { modifiedGraphqlData } from '../utils/constant';

const NotFoundPage = ({ data, location }) => {

  data = modifiedGraphqlData(data);

  const body = data.body;

  return (
    <Home data={data} location={location}>
      <div id="main" className="not-found">
        <Helmet>
          <title>Page not found</title>
        </Helmet>
        <Icon name={body.icon} />
        <h1>{body.title}</h1>
        <p>{body.description} <Link to="/" className="button special">GO HOME</Link></p>
      </div>
    </Home>
  )
}

NotFoundPage.propTypes = mandatoryProps;

export default NotFoundPage;

export const notFoundPage = graphql`
  query {
    site {
        ...SiteMetaFields
    }
    markdownRemark(frontmatter: {layout: {eq: "404"}}) {
        ...Site404MarkdownFields
    }
  }
`;