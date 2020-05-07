import React, { useContext } from 'react';
import ProjectSummary from './ProjectSummary';
import { ProjectContext } from '../../store/contexts/PorjectContext';

function ProjectList(props: any) {
  const {projects} = useContext(ProjectContext);

  return (
    <div className='project-list section'>
      { projects && projects.map((project: any) => {
         return (<ProjectSummary project={project} key={project.id} />);
      })}
    </div>
  );
}

export default ProjectList;
