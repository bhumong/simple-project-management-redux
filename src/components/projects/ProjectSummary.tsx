import React from 'react';
import { Link } from 'react-router-dom';

function ProjectSummary(props: any) {
  const {project} = props;
  return (
    <Link to={'/project/' + project.id}>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by the net ninja</p>
          <p className="grey-text">3rd september, 2am</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectSummary;
