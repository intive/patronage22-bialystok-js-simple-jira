import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "src/utils/localStorage";

export const useLocalStorageAuth = (
  defaultValue: boolean,
  key: string
): [boolean, Function] => {
  const [value, setValue] = useState<boolean>(() => {
    const localStorageValue = getLocalStorage(key);
    console.log(localStorageValue);

    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    }

    setLocalStorage(key, defaultValue);
    return defaultValue;
  });

  const setAuthValue = (value: boolean) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setAuthValue];
};
