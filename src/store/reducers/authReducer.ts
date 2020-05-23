const initState = {
  authError: null,
  user: null,
  status: null,
}

const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state, 
        authError: 'Login Fail',
        user: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state, 
        authError: null,
        user: action.user
      };
    case 'SIGNOUT_SUCCESS':
      return {
        ...state, 
        authError: null,
        user: null
      };
    case 'SIGNOUT_ERROR':
      return {
        ...state, 
        authError: 'Logout Fail',
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null,
        status: 'OK'
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: (action.err.message) ? action.err.message : '',
        status: 'ERROR'
      };
    default:
      return state;
  }
}

export default authReducer;