import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchTemplates = () => API.get("/templates");
export const createTemplate = (newTemplate: { name: string; image: string }) =>
  API.post("/templates", newTemplate);
export const updateTemplate = (
  id: any,
  updatedTemplate: { name: string; image: string }
) => API.patch(`/templates/${id}`, updatedTemplate);
export const deleteTemplate = (id: string | number | null | undefined) =>
  API.delete(`/templates/${id}`);
