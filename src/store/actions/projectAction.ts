const createProject = (project: any) => {
  return (dispatch: any, getState: any, {getFirebase, getFirestore} : any) => {
    dispatch({type: 'CREATE_PROJECT', project: project});
  }
}

export default createProject;