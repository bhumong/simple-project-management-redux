const createProject = (project: any) => {
  return (dispatch: any, getState: any, {getFirebase, getFirestore} : any) => {
    const firestore =  getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'net',
      authorLastName: 'ninja',
      auhtorId: 1234,
      createdAt: new Date(),
    }).then( (response: any) => {
      console.log(response);
      dispatch({type: 'CREATE_PROJECT', project: project});
    }).catch( (error: any) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error});
    })
  }
}

export default createProject;