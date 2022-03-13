import { useContext } from "react";
import { AuthContext } from "src/contexts/authentication";
import { LoginView } from "src/views/Login/LoginView";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const {
    state: { token },
  } = useContext(AuthContext);

  return token ? children : <LoginView />;
};

export default PrivateRoute;
