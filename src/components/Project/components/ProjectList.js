import React from 'react';
import PropTypes from 'prop-types';
import { Link, Icon } from '../../Common';

const Project = ({ url, gitUrl, image, caption, description }) => (
  <article className="6u 12u$(xsmall) work-item">
    <Link href={url} target="_blank" className="image fit thumb" >
      <Icon name={image} alt={caption} className="h-300" />
    </Link>

    <h3>
      {caption}
      <Link href={gitUrl} target="_blank" className="icon fa-github valign-middle float-right">
        <span className="label">Github</span>
      </Link>
    </h3>
    <p>{description}</p>
  </article>
);

Project.displayName = `Project`;
Project.propTypes = {
  url: PropTypes.string.isRequired,
  gitUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;