const initState = {
  notifications: null,
}

const notificationReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "FETCH_REQUEST_NOTIF":
      return state;
    case "FETCH_SUCCESS_NOTIF":
      return { ...state, notifications: action.payload };
    case "FETCH_ERROR_NOTIF":
      return state;
    default:
      return state;
  }
}

export default notificationReducer;