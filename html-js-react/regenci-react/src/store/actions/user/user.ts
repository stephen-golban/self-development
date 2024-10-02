import * as api from "../../../api/users";
import { iUser, iUserResumeData } from "../../../utils/interfaces/resume";
import { iToken } from "../../../utils/interfaces/store";
import {
  FETCH_USER,
  UPDATE_USER,
  UPDATE_USER_RESUME,
  SET_USER_TEMPLATES,
} from "../../types/userTypes/types";

// get current user actions
export const fetchUser = async (token: iToken) => {
  const res = await api.fetchUser(token);
  return res;
};

export const dispatchFetchUser = (res: { data: iUser }) => {
  return {
    type: FETCH_USER,
    payload: res?.data,
  };
};

// User resumedata update actions
export const updateUserResume = async (
  resumeData: iUserResumeData,
  token: iToken
) => {
  const res = await api.updateUserResume(resumeData, token);
  return res;
};
export const dispatchUpdateUserResume = (res: { data: iUserResumeData }) => {
  return {
    type: UPDATE_USER_RESUME,
    payload: res.data,
  };
};
export const updateUserCurrentTemplate = async (id: string, token: iToken) => {
  const res = await api.setCurrentTemplate(id, token);
  return res;
};

export const updateUserTemplates = async (templates: [], token: iToken) => {
  const res = await api.setUserTemplates(templates, token);
  return res;
};
export const dispatchUpdateUserTemplates = (res: { data: [] }) => {
  return {
    type: SET_USER_TEMPLATES,
    payload: res.data,
  };
};
// user data update actions
export const updateUser = async (uData: iUser, token: iToken) => {
  const res = await api.updateUser(uData, token);
  return res;
};
export const dispatchUpdateUser = (res: { data: iUser }) => {
  return {
    type: UPDATE_USER,
    payload: res?.data,
  };
};
