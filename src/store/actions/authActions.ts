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

export const checkUser = (user: any) => {
  return (dispatch: any) => {
    if (user) {
      if (user.emailVerified) {
        return dispatch({type: 'FETCH_USER', user});
      } else {
        // dispatch({type: 'LOGIN_ERROR', authError: "Email not verified"});
        firebase.auth().signOut();
        return;
      }
    }
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
          firebase.auth().signOut();
          dispatch({type: 'LOGIN_ERROR', err: error});
        });
    }
    else {
      dispatch({type: 'SIGNOUT_SUCCESS'});
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
        console.log('signiup', response.user?.uid);
        firebase
          .firestore()
          .collection('users')
          .doc(response.user?.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initals: newUser.firstName[0] + newUser.lastName[0],
          })
          .then(innerRes => {
            console.log('sign up create doc', innerRes);
            response.user?.sendEmailVerification();
            dispatch({type: 'SIGNUP_SUCCESS'});
          })
          .catch(innerErr => {
            console.log('inner error', innerErr);
            dispatch({type: 'SIGNUP_ERROR', err: innerErr});
          });
      }).catch(error => {
        console.log('error', error);
        dispatch({type: 'SIGNUP_ERROR', err: error});
      })
  }
}