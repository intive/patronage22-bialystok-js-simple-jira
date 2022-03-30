import React, { createContext, useEffect, useReducer } from "react";
import FetchDataAPI from "../../api/requestsApi";
import { reducer } from "./reducer";
import { Actions, State, StatusTypes } from "./types";
import { logInError, logInSuccess, logOutCompleted } from "./actionCreators";

export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";
export const REFRESH_TOKEN_INITIAL_VALUE = {
  token: "",
  validUntil: "",
};

export const retrieveRefreshToken = (): typeof REFRESH_TOKEN_INITIAL_VALUE => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  return refreshToken ? JSON.parse(refreshToken) : REFRESH_TOKEN_INITIAL_VALUE;
};

export const initialState = {
  status: StatusTypes.INITIAL,
  username: "",
  password: "",
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || "",
  refreshToken: retrieveRefreshToken(),
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

  const fetchToken = async () => {
    try {
      const response = await FetchDataAPI.addData("/api/user/signin", {
        username: state.username,
        password: state.password,
      });

      if (response.responseCode !== 200) {
        throw new Error(`Response status: ${response.Message}`);
      }

      dispatch(logInSuccess(response.data));
    } catch (error) {
      console.error(error);
      logInError();
    }
  };

  const fetchLogOut = async () => {
    try {
      const response = await FetchDataAPI.addData("/api/user/signout");

      if (response.responseCode !== 200) {
        throw new Error(`Response status: ${response.Message}`);
      }

      dispatch(logOutCompleted());
    } catch (error) {
      console.error(error);
      dispatch(logOutCompleted());
    }
  };

  useEffect(() => {
    if (state.status === StatusTypes.LOGGING_IN) {
      fetchToken();
    }

    if (state.status === StatusTypes.LOGGING_OUT) {
      fetchLogOut();
    }
  }, [state.status]);

  useEffect(() => {
    localStorage.setItem(ACCESS_TOKEN_KEY, state.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, JSON.stringify(state.refreshToken));
  }, [state.accessToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
