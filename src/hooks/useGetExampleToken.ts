import { useContext } from "react";
import { AuthContext, logIn, logOut } from "src/contexts/authentication";

const LOGIN = "testLogin";
const PASSWORD = "password789";
const EXAMPLE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export interface Credentials {
  login: string;
  password: string;
}

export const useGetExampleToken = () => {
  const { dispatch } = useContext(AuthContext);

  return (credentials: Credentials) => {
    // TO-DO: fetch real token from Backend
    if (credentials.login === LOGIN && credentials.password === PASSWORD) {
      dispatch(logIn(EXAMPLE_TOKEN));
    } else {
      dispatch(logOut());
    }
  };
};
