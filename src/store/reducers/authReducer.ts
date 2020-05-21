const initState = {
  authError: null,
  user: null,
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
    default:
      return state;
  }
}

export default authReducer;