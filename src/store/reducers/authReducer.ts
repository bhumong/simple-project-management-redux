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
    default:
      return state;
  }
}

export default authReducer;