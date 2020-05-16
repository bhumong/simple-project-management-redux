import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import AnyInterface from '../../helpers/interfaces/AnyInterface';
import { fetchProjects } from '../../store/actions/projectAction'

class Dashboard extends React.Component <AnyInterface> {
  componentDidMount() {
  	this.props.fetchProjects()
  }

  render() {
    const {projects} = this.props;
    return (
      <div className='dashoard container'>
        <div className="row">
  
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
  
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
  
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    projects: state.project.projects,
  }
}

export default connect(mapStateToProps, {fetchProjects}) (Dashboard);
