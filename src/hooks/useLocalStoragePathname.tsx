import { useState } from "react";
import { getLocalStorage, setLocalStorage } from "src/utils/localStorage";

export const useLocalStoragePathname = (
  defaultValue: string,
  key: string
): [string, Function] => {
  const [value, setValue] = useState<string>(() => {
    const localStorageValue = getLocalStorage(key);
    console.log(localStorageValue);

    if (localStorageValue) {
      return localStorageValue;
    }
    setLocalStorage(key, defaultValue);
    return defaultValue;
  });
  const setLocalStorageValue = (value: string) => {
    setValue(value);
    localStorage.setItem(key, value);
  };

  return [value, setLocalStorageValue];
};
