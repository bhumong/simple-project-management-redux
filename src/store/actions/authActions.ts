import firebase from '../../configs/FireBaseConfig'

export const signIn = (creadential: any) => {
  return (dispatch: any) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(creadential.email, creadential.password)
      .then(response => {
        console.log('login');
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
        if (user && user?.emailVerified) {
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