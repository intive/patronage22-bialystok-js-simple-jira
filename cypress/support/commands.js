import "@testing-library/cypress/add-commands";

import {
  interceptSignInRequest,
  LOGIN,
  PASSWORD,
  ProjectListIntercept,
} from "./intercepts";

Cypress.Commands.add("login", () => {
  cy.visit("/");

  interceptSignInRequest();

  cy.get("input[name=login]").type(LOGIN);
  cy.get("input[name=password]").type(PASSWORD).type("{enter}");
});

Cypress.Commands.add("fetchProjectsFromApi", () => {
  ProjectListIntercept.fetchFromApi().as("fetchProjectsFromApi");
  cy.wait("@fetchProjectsFromApi");
});

Cypress.Commands.add("fetchEmptyProjectList", () => {
  ProjectListIntercept.fetchEmptyMock().as("fetchEmptyProjectList");
  cy.wait("@fetchEmptyProjectList");
});
