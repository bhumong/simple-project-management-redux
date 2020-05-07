import React from 'react';
import ProjectSummary from './ProjectSummary';

function ProjectList(props: any) {
  const projects = [
    {title: 'satu', id:1, content: 'satu'},
    {title: 'dua', id:2, content: 'dua'},
    {title: 'tiga', id:3, content: 'tiga'},
  ];

  return (
    <div className='project-list section'>
      { projects && projects.map((project: any) => {
         return (<ProjectSummary project={project} key={project.id} />);
      })}
    </div>
  );
}

export default ProjectList;
