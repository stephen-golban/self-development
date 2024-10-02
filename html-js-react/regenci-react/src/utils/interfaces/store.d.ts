import { iUser } from "./resume";
import { iTemplate } from "./templates";

export type iToken = string;

export interface iRootState {
  isLogged: boolean;
  currentUser: iUser;
  templates: iTemplate;
  token: iToken;
}
