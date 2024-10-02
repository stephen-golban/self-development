import { LOGIN } from "../../types/authTypes/types";

export const dispatchLogin = () => {
  return {
    type: LOGIN,
    payload: true,
  };
};
