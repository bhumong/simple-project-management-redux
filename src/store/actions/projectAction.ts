import firebase from "../../configs/FireBaseConfig";

const createProject = (project: any) => {
  return (dispatch: any, getState: any) => {
    const firestore =  firebase.firestore();
    const currentState = getState();
    const auth = currentState.auth;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: auth.userData.firstName,
      authorLastName: auth.userData.lastName,
      auhtorId: auth.user.uid,
      createdAt: new Date(),
    }).then( (response: any) => {
      dispatch({type: 'CREATE_PROJECT', project: project});
    }).catch( (error: any) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error});
    })
  }
}

export const fetchProjects = () => {
  return (dispatch: any) => {
    // dispatch( {type: 'FETCH_REQUEST'} );
    return firebase
      .firestore()
      .collection('projects')
      .orderBy('createdAt', 'desc')
      .get()
      .then((reponse: any) => {
        let fbprojects = reponse.docs.map((datas: any) => {
          let data: any = datas.data();
          return { id: datas.id, ...data }
        });
      	dispatch( {type: 'FETCH_SUCCESS', payload: fbprojects } )
      }).catch( (error: any) => {
      	dispatch( {type: 'FETCH_ERROR', error} )
      })
  }
}

export const fetchProject = (id: any) => {
  return (dispatch: any) => {
    // dispatch( {type: 'FETCH_REQUEST'} );
    return firebase
      .firestore()
      .collection('projects')
      .doc(id)
      .get()
      .then((response: any) => {
        if (response.exists) {
          dispatch({ type: 'FETCH_SUCCESS', payload: [{id, ...response.data()}] })
        } else {
          alert("No such project");
        }
      }).catch( (error: any) => {
      	dispatch( {type: 'FETCH_ERROR', error} )
      })
  }
}


export default createProject;