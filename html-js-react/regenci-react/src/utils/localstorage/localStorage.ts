export const generateId = (length: number | undefined) => {
  return Math.random().toString(length).substring(7);
};

export const getLocalStorage = (key: string) => {
  if (window) {
    return localStorage.getItem(key);
  }
};

export const setLocalStorage = (key: string, value: any) => {
  if (window) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (window) {
    localStorage.removeItem(key);
  }
};
