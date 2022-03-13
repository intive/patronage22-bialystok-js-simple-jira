import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { Actions, State } from "./types";

const TOKEN_KEY = "token";

export const initialState = {
  token: localStorage.getItem(TOKEN_KEY) || "",
};

export const AuthContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => {} });

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(TOKEN_KEY, state.token);
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
