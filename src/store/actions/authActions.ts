import firebase from '../../configs/FireBaseConfig'

export const signIn = (creadential: any) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(creadential.email, creadential.password)
      .then(response => {
        if (response.user?.emailVerified) {
          dispatch({type: 'LOGIN_SUCCESS', user: response.user});
        } else {
          dispatch({type: 'LOGIN_ERROR', authError: "Email not verified"});
        }
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
          if (user.emailVerified) {
            dispatch({type: 'FETCH_USER', user});
          } else {
            firebase.auth().signOut();
          }
        } else {
          dispatch({type: 'LOGIN_ERROR', authError: "Email not verified"});
        }
      });
  }
}

export const getUserData = (user: any) => {
  return (dispatch: any) => {
    if (user && user?.emailVerified) {
      firebase
        .firestore()
        .collection('users')
        .doc(user?.uid)
        .get()
        .then(response => {
          dispatch({type: 'LOGIN_SUCCESS', user, userData: response.data()})
        })
        .catch(error => {
          dispatch({type: 'LOGIN_ERROR', err: error});
        })
    }
    else {
      dispatch({type: 'LOGIN_ERROR'});
    }
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

export const signUp = (newUser: any) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )
      .then(response => {
        return firebase
          .firestore()
          .collection('users')
          .doc(response?.user?.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initals: newUser.firstName[0] + newUser.lastName[0],
          })
          .then(innerRes => {
            response.user?.sendEmailVerification();
            dispatch({type: 'SIGNUP_SUCCESS'});
          })
          .catch(innerErr => {
            dispatch({type: 'SIGNUP_ERROR', err: innerErr});
          })
      }).catch(error => {
        dispatch({type: 'SIGNUP_ERROR', err: error});
      })
  }
}