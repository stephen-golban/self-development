export const userDetailsObj = {
  firstName: "",
  lastName: "",
  job: "",
  email: "",
  phone: "",
  avatar: "",
  summary: "",
};
export const Degrees = [
  "High School Diploma",
  "GED",
  "Associative of Arts",
  "Associative of Science",
  "Associative of Applied Science",
  "Bachelor of Arts",
  "Bachelor of Science",
  "BBA",
  "Master of Arts",
  "Master of Science",
  "MBA",
  "J.D.",
  "M.D.",
  "Ph.D.",
  "Some College ( No degree )",
];

export const Levels = [
  "Select your level",
  "A1 - Beginner",
  "A2 - Elementary",
  "B1 - Intermediate",
  "B2 - Upper Intermediate",
  "C1 - Advanced",
  "C2 - Native",
];

export function debounce<T extends Function>(cb: T, wait = 2000) {
  let h = 0 as any;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return (callable as any) as T;
}
