import { API_GET_PROJECTS_LIST, API_SIGN_IN } from "../../src/api/contsans";

export const LOGIN = "mrBean";
export const PASSWORD = "789Password.";

const SUCCESS_RESPONSE_MOCK = {
  responseCode: 200,
  baseResponseError: null,
  message: "You have been signed in successfully",
  data: {
    refreshToken: {
      token:
        "rP26eKBbpVICCehiKIbPIzZMFUD82tYt1GEVWJpKCx0/0MApfyuJJMnrHO/jzWXLvB5g3oa78Io3FX7/vQSOwQ==",
      validUntil: "2022-04-11T18:19:48.8940578Z",
    },
    accessToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OGY3YjViNS01ZGYzLTRiYmMtOThkYi0yZDk0ODMzYTZmYTkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdExvZ2luIiwibmJmIjoxNjQ5NTI4Mzg4LCJleHAiOjE2NDk1Mjg2ODgsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwMDkvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzAwOS8ifQ.rb3SHC7XRLuttzDWyK9XI4Z6zBjb6eU2XA_GEirMI30",
  },
};

const ERROR_RESPONSE_MOCK = {
  statusCode: 400,
};

export const areCredentialsCorrect = (req) =>
  req.body.username === LOGIN && req.body.password === PASSWORD;

export const interceptSignInRequest = () =>
  cy.intercept(API_SIGN_IN, (req) => {
    if (areCredentialsCorrect(req)) {
      req.reply(SUCCESS_RESPONSE_MOCK);
    } else {
      req.reply(ERROR_RESPONSE_MOCK);
    }
  });

export const ProjectListIntercept = {
  fetchFromApi: () => cy.intercept(API_GET_PROJECTS_LIST),
  fetchEmptyMock: () =>
    cy.intercept(API_GET_PROJECTS_LIST, (req) => {
      req.reply({
        responseCode: 200,
        baseResponseError: null,
        message: null,
        data: [],
      });
    }),
};
