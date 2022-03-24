import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectList } from './components';

const Project = ({ projects = [], button }) => {

  const limit = 6;
  const [tempProjects, setTempProjects] = useState(projects.slice(0, limit));

  const onClickSeeMore = (e) => {
    setTempProjects([...tempProjects, ...projects.slice(tempProjects.length, tempProjects.length + limit)])
  }

  return (
    <div>
      {tempProjects && (<div className="row">
        {tempProjects.map((project, i) =>
          (<ProjectList
            key={i}
            {...project}
          />))
        }
        </div>
      )}
      <ul className="actions">
        <li>
          <a className="button" onClick={onClickSeeMore}>
            {button.name}
          </a>
        </li>
      </ul>
    </div>
  )
}

Project.displayName = `Project`
Project.propTypes = {
  projects: PropTypes.array,
  button: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
}

export default Project;
