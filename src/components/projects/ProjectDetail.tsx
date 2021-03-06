import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../store/actions/projectAction';
import { firstLetterUpper } from '../../helpers/StringHelper';
import moment from 'moment';

function ProjectDetail(props: any) {
  const id = props.match.params.id;
  const {projects} = props;
  const localFetch = props.fetchProject;
  useEffect(() => {
    localFetch(id);
  }, [localFetch, id]);

  let project = projects.find((val : any) => id === val.id);

  return (project) ? (
    <div className='container section project-details'>
        <div className="card z-depth-0">
          
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>

          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by the {firstLetterUpper(project?.authorFirstName) + ' ' + firstLetterUpper(project?.authorLastName)}</div>
            <div>{moment(project?.createdAt.toDate()).format('LLL')}</div>
          </div>

        </div>
    </div>
  ) : 
  (<div></div>)
  ;
}
const mapStateToProps = (state: any, ownState: any) => {
  return {
    projects: state.project.projects ? state.project.projects : [],
  }
}
export default connect(mapStateToProps, {fetchProject}) (ProjectDetail);
