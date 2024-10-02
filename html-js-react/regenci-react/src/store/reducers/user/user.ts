import { iUser } from "../../../utils/interfaces/resume";
import {
  FETCH_USER,
  UPDATE_USER,
  UPDATE_USER_RESUME,
} from "../../types/userTypes/types";

const usersReducer = (state = [], action: { type: string; payload: iUser }) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case UPDATE_USER:
      return action.payload;
    case UPDATE_USER_RESUME:
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
