import polish from "../../src/translations/pl";
import english from "../../src/translations/en";

const name = "adamowicz.piotr2@gmail.com"; //"MB"; //
const password = "Appp@ssword1"; //"Patronage2022@"; //

const login = () => {
  cy.visit("/");
  localStorage.setItem("USE_MOCK", "true");
  cy.get("input[name='login']").type(name);
  cy.get("[name='password']").type(password + "{enter}");
};

describe("Create New Project flow in PL", function () {
  beforeEach(() => {
    login();
  });

  it("Render New Project button", () => {
    // cy.visit("/projects");
    cy.findByText(polish.newProjectBtn).click();
  });
  it("Render Create Project Dialog & empty input", () => {
    cy.findByText(polish.newProjectBtn).click();
    cy.get("div[role=dialog]");
    cy.get("h2").contains(polish.dialogCreateProjectTitle);
    cy.get("input").should("be.empty");
    cy.get("button").contains(polish.cancelBtn);
    cy.get("button").contains(polish.createBtn).should("be.disabled");
  });

  it("Submit form creation & close dialog", function () {
    cy.findByText(polish.newProjectBtn).click();
    cy.get("input").last().type("New Project");
    cy.get("button").contains(polish.createBtn).click();
    cy.get("div[role=dialog]").should("not.exist");
  });
  it("Delete Project", () => {
    cy.findByText("Project1")
      .parent()
      .parent()
      .find("#three-dots-menu-button")
      .first()
      .click();
    cy.findByText("Delete project").click();
    cy.get("div[role=dialog]");
    cy.findByText(polish.yesBtn).click();
    cy.get("div[role=dialog]").should("not.exist");
    cy.findByText("Project1").should("not.exist");
  });
});
