const projectReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return state;
    case 'CREATE_PROJECT_ERROR':
      return state;
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return { ...state, projects: action.payload };
    case "FETCH_ERROR":
      return state;
    default:
      return state;
  }
}

export default projectReducer;