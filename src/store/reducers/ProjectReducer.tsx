import ProjectHelper from "../../helpers/ProjectHelper";

const ProjectReducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH':
      state = action.projects;
      return state;
    case 'ADD':
      action.triggerLoading(true);
      const addProject = async (action : any) => {
        await ProjectHelper.addProject(action.content, action.title);
        action.setState({
          title: '',
          content: '',
        })
        action.triggerLoading(false);
      } 
      addProject(action);
      return state;
    default:
      break;
  }
  return state;
}

export default ProjectReducer;