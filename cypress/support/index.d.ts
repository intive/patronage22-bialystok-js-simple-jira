import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<Element>;
      fetchProjectsFromApi(): Chainable<Element>;
      fetchEmptyProjectList(): Chainable<Element>;
    }
  }
}
