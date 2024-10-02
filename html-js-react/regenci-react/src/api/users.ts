import axios from "axios";
import { iUser, iUserResumeData } from "../utils/interfaces/resume";
import { iToken } from "../utils/interfaces/store";

const API = axios.create({ baseURL: "http://localhost:5000" });

// get
export const fetchUser = (token: iToken) => API.get("/users/info", { headers: { Authorization: token } });
export const fetchAllUsers = (token: iToken) => API.get("/users/all", { headers: { Authorization: token } });

// post
export const setRefreshToken = () => API.post("/users/refresh-token", null, { withCredentials: true });
export const getUserById = (id: any, token: iToken) => API.get(`/users/get-user/${id}`, { headers: { Authorization: token } });
export const setUserTemplates = (data: [], token: iToken) => API.post("/users/set-user-templates", data, { headers: { Authorization: token } });
export const setCurrentTemplate = (id: string, token: iToken) => API.post("/users/set-current-template", { id }, { headers: { Authorization: token } });

// patch
export const updateUser = (data: iUser, token: iToken) => API.patch("/users/update-user", { data }, { headers: { Authorization: token } });
export const updateUserResume = (data: iUserResumeData, token: iToken) => API.patch("/users/update-resume", { data }, { headers: { Authorization: token } });

// delete
