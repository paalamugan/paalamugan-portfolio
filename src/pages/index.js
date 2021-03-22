import React, { useState } from 'react';
import { graphql } from 'gatsby'

import { mandatoryProps } from '../utils/propTypes';

import { Home } from '../components/Layout';
import { Header } from '../components/Common';
import Project from '../components/Project';
import Contact from '../components/Contact';

import { modifiedGraphqlData } from '../utils/constant';

const HomeIndex = ({ data, location }) => {

  data = modifiedGraphqlData(data);

  const { section_one, section_two, section_three } = data.body;

  return (
    <Home data={data} location={location}>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2 className="mb-3">
              {section_one.title}
            </h2>
          </header>
          <p>{section_one.description}</p>
          <strong className="text-bold">Key Skills</strong>
          <p>
            {section_one.skills && section_one.skills.map((skill, index) => (
              <span className="badge" key={index}>{skill}</span>
            ))}
          </p>
        </section>

        <section id="two">
          <h2>{section_two.title}</h2>
          <Project projects={section_two.projects} button={section_two.button} />
        </section>

        <section id="three">
          <Contact {...section_three} />
        </section>
      </div>
    </Home>
  )
}

HomeIndex.propTypes = mandatoryProps;

export default HomeIndex;

export const HomeIndexQuery = graphql`
    query {
        site {
            ...SiteMetaFields
        }
        markdownRemark(frontmatter: {layout: {eq: "index"}}) {
            ...SiteIndexMarkdownFields
        }
    }
`;