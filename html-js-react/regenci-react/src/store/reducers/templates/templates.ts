import { iTemplate } from "../../../utils/interfaces/templates";
import {
  CREATE_TEMPLATE,
  DELETE_TEMPLATE,
  FETCH_ALL_TEMPLATES,
  UPDATE_TEMPLATE,
} from "../../types/templateTypes/types";

export default function TemplateReducer(
  templates = [],
  action: { type: string; payload: iTemplate }
) {
  switch (action.type) {
    case FETCH_ALL_TEMPLATES:
      return action.payload;
    case CREATE_TEMPLATE:
      return [...templates, action.payload];
    case UPDATE_TEMPLATE:
      return templates.map((template: iTemplate) =>
        template._id === action.payload._id ? action.payload : template
      );
    case DELETE_TEMPLATE:
      return templates.filter((template: iTemplate) =>
        template._id !== action.payload._id ? action.payload : template
      );
    default:
      return templates;
  }
}
