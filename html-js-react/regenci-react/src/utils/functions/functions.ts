import { message } from "antd";
import { Dispatch } from "react";
import { History } from "history";
import { logout } from "../../api/auth";
import { setRefreshToken } from "../../api/users";
import { dispatchLogin } from "../../store/actions/auth/auth";
import { GET_TOKEN } from "../../store/types/tokenTypes/types";
import { removeLocalStorage } from "../localstorage/localStorage";
import { dispatchFetchUser, fetchUser } from "../../store/actions/user/user";

export const handleLogout = async (history: History<unknown>) => {
  try {
    const res = await logout();
    removeLocalStorage("login");
    message.warning(res?.data?.message);
    setTimeout(() => {
      history.go(0);
    }, 1500);
  } catch (err) {
    message.error(err?.response?.data?.message);
    setTimeout(() => {
      history.go(0);
    }, 1200);
  }
};

export const handleGetToken = (dispatch: Dispatch<any>) => {
  const login = localStorage.getItem("login");
  if (login) {
    const getToken = async () => {
      try {
        const res = await setRefreshToken();
        dispatch({ type: GET_TOKEN, payload: res?.data?.accessToken });
      } catch (err) {
        message.error(err?.response?.data?.message);
      }
    };
    getToken();
  }
};

export const handleFetchCurrentUser = (
  dispatch: Dispatch<any>,
  token: string
) => {
  if (token) {
    const getUser = () => {
      dispatch(dispatchLogin());
      fetchUser(token).then((res) => dispatch(dispatchFetchUser(res)));
    };
    getUser();
  }
};

export const delayDebouncedFunctionWithRes = (
  timeout: number,
  action: any,
  dispatch: Dispatch<any>,
  dispatchFn: any,
  data: any,
  token: string
) => {
  const debounced = setTimeout(() => {
    const setData = () => {
      action(data, token).then((res: any) => {
        dispatch(dispatchFn(res));
      });
    };
    setData();
  }, timeout);
  return () => {
    clearTimeout(debounced);
  };
};

export const delayDebouncedFunction = (
  timeout: number,
  action: any,
  data: any,
  token: string
) => {
  const debounced = setTimeout(() => {
    const setData = () => {
      action(data, token);
    };
    setData();
  }, timeout);
  return () => {
    clearTimeout(debounced);
  };
};
