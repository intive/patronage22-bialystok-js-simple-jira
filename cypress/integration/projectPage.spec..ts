import { API_GET_PROJECTS_LIST } from "../../src/api/contsans";

describe("project page E2E testing with filled list", () => {
  beforeEach(() => {
    cy.setLocalStorage("USE_MOCK", true);
  });

  it("Logins correctly", () => {
    cy.visit("/");
    cy.findByRole("login").should("exist");
    cy.findByRole("login").type("Kuba");
    cy.findByRole("password").should("exist");
    cy.findByRole("password").type("12345aA%{enter}");
  });

  it("Opens New Project Dialog", () => {
    cy.findByText("Nowy Projekt").click();
    cy.findByRole("heading", { name: /podaj nazwę projektu/i });
  });

  it("Makes create button active after typing project name and creates project after clicking it", () => {
    cy.findByRole("button", { name: /utwórz/i }).should("be.disabled");
    cy.findByRole("textbox").type("New test project");
    cy.findByRole("button", { name: /utwórz/i }).should("not.be.disabled");
    cy.findByRole("button", { name: /utwórz/i }).click();
  });

  it("deletes project", () => {
    cy.findByText("New test project")
      .parent()
      .parent()
      .find(".MuiSvgIcon-root")
      .click();
    cy.findByText(/delete project/i).click();
    cy.findByRole("button", { name: /tak/i }).should("exist");
    cy.findByRole("button", { name: /tak/i }).click();
    cy.findByText("New test project 2").should("not.exist");
  });
});

describe("project page E2E testing with empty list", () => {
  beforeEach(() => {
    cy.intercept(API_GET_PROJECTS_LIST, (req) => {
      req.reply({
        data: [],
      });
    });
  });

  it("Logins correctly", () => {
    cy.visit("/");
    cy.findByRole("login").should("exist");
    cy.findByRole("login").type("Kuba");
    cy.findByRole("password").should("exist");
    cy.findByRole("password").type("12345aA%{enter}");
  });

  it("should display initial view when there are no project on the list", () => {
    cy.wait(1000);
    cy.findByTestId("AutoAwesomeOutlinedIcon").should("exist");
  });
});
