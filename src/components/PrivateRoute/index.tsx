import { useContext } from "react";
import { AuthContext } from "src/contexts/authentication";
import { LoginView } from "src/views/Login/LoginView";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const {
    state: { accessToken },
  } = useContext(AuthContext);

  return accessToken ? children : <LoginView />;
};

export default PrivateRoute;
