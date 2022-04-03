const BASE_API_URL = "https://patronageapi.herokuapp.com/api";

export const API_GET_BOARDS_LIST = `${BASE_API_URL}/board`;
export const API_ADD_NEW_BOARD = `${BASE_API_URL}/board/create`;
export const API_REMOVE_BOARD = `${BASE_API_URL}/board/`;
export const API_GET_PROJECTS_LIST = `${BASE_API_URL}/project`;
export const API_ADD_NEW_PROJECT = `${BASE_API_URL}/project`;
export const API_DELETE_A_PROJECT = `${BASE_API_URL}/project`;
export const API_GET_BOARD_STATUS = `${BASE_API_URL}/boardStatus`;
export const API_GET_STATUS = `${BASE_API_URL}/status`;
export const API_ADD_NEW_STATUS = `${BASE_API_URL}/status?code=`;
export const API_GET_STATUSES_LIST = `${BASE_API_URL}/status`;
export const API_UPDATE_TICKET = `${BASE_API_URL}/issue/`;
export const API_ISSUE = `${BASE_API_URL}/issue/`;
export const USER_LIST = `${BASE_API_URL}/user/list/`;
export const API_SIGN_IN = `${BASE_API_URL}/user/signin`;
export const API_SIGN_OUT = `${BASE_API_URL}/user/signout`;
