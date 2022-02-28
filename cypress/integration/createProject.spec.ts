import polish from "../../src/translations/pl";
import english from "../../src/translations/en";

describe("Create New Project flow in PL", () => {
  it("Home page renders correctly", () => {
    cy.visit("/");
  });
  it("Renders navigation", () => {
    cy.get("header");
  });
  it("Renders New Project button", () => {
    const newProjectBtnPL = cy.findByText(polish.newProjectBtn).click();
  });
  it("Renders Welcome Paragraph", () => {
    cy.get("p").contains(polish.welcomeBoardParagraph);
  });
  it("Renders Create Project Dialog window with disabled create button and empty input", () => {
    cy.get("div[role=dialog]");
    cy.get("h2").contains(polish.dialogCreateProjectTitle);
    cy.get("input").should("be.empty");
    cy.get("button").contains(polish.cancelBtn);
    cy.get("button").contains(polish.createBtn).should("be.disabled");
  });

  it("Submits form creation & closes dialog", function () {
    cy.get("input").last().type("New Project");
    cy.get("button").contains(polish.createBtn).click();
    cy.get("div[role=dialog]").should("not.exist");
  });
});
