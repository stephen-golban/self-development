import * as api from "../../../api/templates";
import {
  CREATE_TEMPLATE,
  DELETE_TEMPLATE,
  FETCH_ALL_TEMPLATES,
  UPDATE_TEMPLATE,
} from "../../types/templateTypes/types";

// Get all the templates
export const getTemplates = () => async (
  dispatch: (arg0: { type: string; payload: [] }) => void
) => {
  try {
    const { data } = await api.fetchTemplates();
    dispatch({ type: FETCH_ALL_TEMPLATES, payload: data });
  } catch (error) {
    console.log(error?.response?.data);
  }
};

// Create a new template
export const createTemplates = (template: {
  name: string;
  image: string;
}) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
  try {
    const { data } = await api.createTemplate(template);
    dispatch({ type: CREATE_TEMPLATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update a specific template
export const updateTemplates = (
  id: any,
  template: { name: string; image: string }
) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
  try {
    const { data } = await api.updateTemplate(id, template);
    dispatch({ type: UPDATE_TEMPLATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Delete a specific template
export const deleteTemplates = (
  id: string | number | null | undefined
) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
  try {
    await api.deleteTemplate(id);
    dispatch({ type: DELETE_TEMPLATE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
