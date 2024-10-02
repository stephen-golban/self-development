import { ForwardRefExoticComponent } from "react";

export interface iAuthFormFields {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  icon: ForwardRefExoticComponent;
  rules: [];
  dependencies: string;
  map: any;
}
export interface iAuthForm {
  btnText: string;
  fields: object[iAuthFormFields];
  onFinish: Function;
  question: boolean;
  noSignForm: boolean;
}
export interface iSignin {
  email: string;
  password: string;
}
export interface iSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}
export interface iReset {
  newPassword: string;
  repeatPassword: string;
}
