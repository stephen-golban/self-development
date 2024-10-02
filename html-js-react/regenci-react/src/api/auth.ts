import axios from "axios";
import { iReset, iSignin, iSignup } from "../utils/interfaces/authForm";
import { iToken } from "../utils/interfaces/store";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const logout = () => API.get("/auth/logout");
export const signIn = (data: iSignin) => API.post("/auth/signin", data, { withCredentials: true });
export const signUp = (data: iSignup) => API.post("/auth/signup", data);
export const activate = (token: iToken) => API.post("/auth/activation", { token });
export const forgotPassword = (data: string) => API.post("/auth/forgot-password", data);
export const resetPassword = (data: iReset, token: iToken) => API.post("/auth/reset-password", data, { headers: { Authorization: token }});
