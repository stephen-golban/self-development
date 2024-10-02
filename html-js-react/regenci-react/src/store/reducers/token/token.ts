import { iToken } from "../../../utils/interfaces/store";
import { GET_TOKEN } from "../../types/tokenTypes/types";

const tokenReducer = (state = "", action: { type: iToken; payload: iToken }) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
