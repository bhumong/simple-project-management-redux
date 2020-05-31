import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  notification: notificationReducer,
});

export default rootReducer;
