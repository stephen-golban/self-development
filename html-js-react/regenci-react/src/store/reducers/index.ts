import { combineReducers } from "redux";
import isLogged from "./auth/auth";
import templates from "./templates/templates";
import token from "./token/token";
import currentUser from "./user/user";

export default combineReducers({
  isLogged,
  templates,
  token,
  currentUser,
});
