export const getLocalStorage = (key: string) => {
  const localStorageValue = localStorage.getItem(key);

  return localStorageValue;
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
