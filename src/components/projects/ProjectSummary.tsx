import React from 'react';
import { Link } from 'react-router-dom';

function ProjectSummary(props: any) {
  const {project} = props;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title"> <Link to='/project/1'>{project.title}</Link></span>
        <p>Posted by the net ninja</p>
        <p className="grey-text">3rd september, 2am</p>
      </div>
    </div>
  );
}

export default ProjectSummary;
