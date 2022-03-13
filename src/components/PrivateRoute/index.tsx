import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useLocalStorageAuth } from "src/hooks/useLocalStorageAuth";
import { useLocalStoragePathname } from "src/hooks/useLocalStoragePathname";

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
