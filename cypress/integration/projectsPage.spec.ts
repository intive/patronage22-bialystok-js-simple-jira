// dodane są waity w paru miejscach w celu wizualnego potwierdzenia czy wszystko działa na froncie

import { API_GET_PROJECTS_LIST } from "../../src/api/contsans";

describe("Get local", () => {
  beforeEach(() => {
    window.localStorage.setItem("USE_MOCK", "true");
  });

  it("Log in", () => {
    cy.visit("/projects");
    cy.get('input[name="login"]').type("Mongo");
    cy.get('input[name="password"]').type("Confirmation&22").type("{enter}");
  });

  it("Dialog after clicking a New project Button", () => {
    cy.findByRole("button", {
      name: /nowy projekt/i,
    }).click();
  });

  it("Renders new project Dialog and exit Dialog", () => {
    cy.findByRole("heading", {
      name: /podaj nazwę projektu/i,
    });
    cy.findByRole("textbox").should("be.empty");
    cy.findByRole("button", {
      name: /anuluj/i,
    });
  });

  it("Renders new project Dialog and exit Dialog", () => {
    cy.findByRole("textbox").wait(3000).type("Najlepszy projekt").wait(2000);
    cy.findByRole("textbox")
      .invoke("val")
      .should("not.be.empty")
      .then(() => {
        cy.findByRole("button", {
          name: /utwórz/i,
        })
          .should("not.be.disabled")
          .click();
      })
      .then(() => cy.wait(5000));
  });

  it("Delete project", () => {
    cy.get("#three-dots-menu-button").wait(6000).click();
    cy.get(".MuiButtonBase-root-JobBs").should("exist");
    cy.findByRole("menuitem", {
      name: /delete project/i,
    }).click();
    cy.get("div[role=dialog]").should("exist");
    cy.findByRole("button", {
      name: /tak/i,
    }).click();

    cy.get("div[role=dialog]").should("not.exist").wait(5000);
  });
});

describe("Start page", () => {
  it("When no projects, start page view", () => {
    cy.visit("/projects");
    cy.get('input[name="login"]').type("Mongo");
    cy.get('input[name="password"]').type("Confirmation&22").type("{enter}");

    cy.intercept(API_GET_PROJECTS_LIST, (req) => {
      req.reply({
        data: [],
      });
    });
  });
});
