import React, { createContext, useReducer, useEffect } from 'react';
import ProjectReducer from '../reducers/ProjectReducer';
import ProjectHelper from '../../helpers/ProjectHelper';

interface ProjectContextInterface {
  projects: any[]
  [propName: string]: any
}

export const ProjectContext = createContext({} as ProjectContextInterface);

const ProjectContextProvider = (props: any) => {
  const [projects, dispatch] = useReducer(ProjectReducer, []);

  useEffect(() => {
    let fetchProjectDatas = async () => {
      let fbProjects = await ProjectHelper.getProjects();
      dispatch({
        type: "FETCH",
        projects: fbProjects
      });
    } 
    fetchProjectDatas();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {props.children}
    </ProjectContext.Provider>
  );

}

export default ProjectContextProvider;