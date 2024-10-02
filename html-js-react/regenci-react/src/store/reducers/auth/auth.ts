import { LOGIN } from "../../types/authTypes/types";

const authReducer = (
  state = false,
  action: { type: string; payload: boolean }
) => {
  switch (action.type) {
    case LOGIN:
      return (state = action?.payload);
    default:
      return state;
  }
};

export default authReducer;
