import { useContext } from "react";
import { AuthContext, logIn, logOut } from "src/contexts/authentication";

const LOGIN = "testLogin";
const PASSWORD = "password789";
const EXAMPLE_TOKEN = "ASDFS";

export interface Credentials {
  login: string;
  password: string;
}

export const useGetExampleToken = () => {
  const { dispatch } = useContext(AuthContext);

  return (credentials: Credentials) => {
    // TO-DO: fetch real token from Backend
    if (credentials.login === LOGIN && credentials.password === PASSWORD) {
      console.log(credentials);
      dispatch(logIn(EXAMPLE_TOKEN));
    } else {
      dispatch(logOut());
    }
  };
};
