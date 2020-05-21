import firebase from '../../configs/FireBaseConfig'

export const signIn = (creadential: any) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(creadential.email, creadential.password)
      .then(response => {
        console.log('login', response);
        dispatch({type: 'LOGIN_SUCCESS', user: response.user});
      }).catch(error => {
        dispatch({type: 'LOGIN_ERROR', err: error});
      })
  }
}

export const checkUser = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          dispatch({type: 'LOGIN_SUCCESS', user});
        } else {
          // dispatch({type: 'LOGIN_ERROR'});
        }
      });
  }
}

export const signOut = () => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signOut()
      .then(response => {
        dispatch({type: 'SIGNOUT_SUCCESS'});
      })
      .catch(err => {

        dispatch({type: 'SIGNOUT_ERROR', err});
      })
  }
}