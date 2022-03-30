import {
  REFRESH_TOKEN_INITIAL_VALUE,
  REFRESH_TOKEN_KEY,
} from "src/contexts/authentication";

export const getLocalStorage = (key: string) => {
  const localStorageValue = localStorage.getItem(key);

  return localStorageValue;
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const retrieveRefreshToken = (): typeof REFRESH_TOKEN_INITIAL_VALUE => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  return refreshToken ? JSON.parse(refreshToken) : REFRESH_TOKEN_INITIAL_VALUE;
};
