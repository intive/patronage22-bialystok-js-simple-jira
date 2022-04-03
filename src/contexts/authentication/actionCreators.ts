import { INITIAL_VALUES } from "src/views/Login/LoginView";
import { Actions, ActionTypes, Tokens } from "./types";

export const logIn = (credentials: typeof INITIAL_VALUES): Actions => ({
  type: ActionTypes.LOG_IN,
  payload: {
    credentials,
  },
});

export const logInSuccess = (data: Tokens): Actions => ({
  type: ActionTypes.LOG_IN_SUCCESS,
  payload: data,
});

export const logInError = () => ({
  type: ActionTypes.LOG_IN_ERROR,
});

export const logOut = (): Actions => ({ type: ActionTypes.LOG_OUT });

export const logOutCompleted = (): Actions => ({
  type: ActionTypes.LOG_OUT_COMPLETED,
});
