import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "src/utils/localStorage";

const useLocalStorageAuth = (
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

const useLocalStoragePathname = (
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

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const [authRequired] = useLocalStorageAuth(true, "authRequired");
  const [route, setAuthRoute] = useLocalStoragePathname("", "authRoute");

  useEffect(() => {
    if (authRequired) {
      setAuthRoute(location.pathname);
    }
  }, [authRequired]);

  return authRequired ? <Navigate to='/login' /> : children;
};

export default PrivateRoute;
