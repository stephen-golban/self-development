export interface iUserResumeDataEducation {
  id: string; //Object Id
  sn: string; // Object School Name
  sc: string; // Object School City
  sd: string; // Object School Starting-date
  ed: string; // Object School Ending-date
  deg: string; // Object School Degree
  d: string; // Object School Description
}
export interface iUserResumeDataEmployment {
  id: string; //Object Id
  ej: string; // Object Employment Job
  employer: string; // Object Employment Company / Employer
  esd: string; // Object Employment Starting-date
  eed: string; // Object Employment Ending-date
  ec: string; // Object Employment City
  d: string; // Object Employment Description
}
export interface iUserResumeDataLanguages {
  id: string; //Object Id
  language: string; // Object Language Name
  level: string; // Object Language Level
}
export interface iUserResumeDataLinks {
  id: string; //Object Id
  lbl: string; // Object Link Title
  link: string; // Object Link
}
export interface iUserResumeDataCustom {
  id: string; //Object Id
  c1: string; // Object Custom Section Activity Name
  c2: string; // Object Custom Section City
  c3: string; // Object Custom Section Starting-date
  c4: string; // Object Custom Section Ending-date
  c5: string; // Object Custom Section Description
}
export interface iUserResumeData {
  firstName?: string;
  lastName?: string;
  email?: string;
  job?: string;
  phone?: string;
  avatar?: string;
  summary?: string;
  educationData?: iUserResumeDataEducation[];
  employmentData?: iUserResumeDataEmployment[];
  languageData?: iUserResumeDataLanguages[];
  webLinkData?: iUserResumeDataLinks[];
  customSectionData?: iUserResumeDataCustom[];
  extraActivities?: [];
  skills?: [];
  hobbies?: [];
  updatedAt: Date;
}
export interface iUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  currentTemplate: string;
  resetPasswordLink: string;
  templates: [];
  createdAt: Date;
  updatedAt: Date;
  resumeData: iUserResumeData;
  __v: number;
}
