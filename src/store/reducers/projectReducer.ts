const projectReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log(action.error);
      return state;
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return { ...state, projects: action.payload };
    case "FETCH_ERROR":
      console.log(action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer;