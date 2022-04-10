function Name_Alpha_Numeric() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

const randomString = Name_Alpha_Numeric();

describe("Projects page tests", () => {
  beforeEach(() => {
    localStorage.setItem("USE_MOCK", "true");
  });

  it("check if project page is opening and log in", () => {
    cy.visit("/projects");
    cy.get('input[name="login"]').type("MB");
    cy.get('input[name="password"]').type("Patronage2022@{enter}");
  });

  it("should open New Item Dialog when clicking New Project button", () => {
    cy.findByText(`Nowy Projekt`).click();
    cy.get(".MuiModal-root").should("exist");
  });

  it("should disable Create button when input is empty", () => {
    cy.findByText("Utwórz").should("be.disabled");
  });

  it("should enable Create button when input is not empty", () => {
    cy.get("#styled-text-input").type(randomString);
    cy.findByText("Utwórz").should("be.not.disabled");
  });

  it("should close New Item Dialog when clicked in Create button", () => {
    cy.findByText("Utwórz").click();
    cy.get(".MuiModal-root").should("not.exist");
  });

  it("should open Dialog when trying to delete project", () => {
    cy.get(".MuiGrid-container")
      .children()
      .get("#three-dots-menu-button")
      .click();
    cy.findByText("Delete project").click();
    cy.get(".MuiDialogContent-root").should("exist");
  });

  it("should close Dialog when confirm deletion", () => {
    cy.findByText("Tak").click();
    cy.get(".MuiDialogContent-root").should("not.exist");
  });

  it("should close Dialog when confirm deletion", () => {
    cy.get(".MuiGrid-grid-xs-12").each(() => {
      cy.get("#three-dots-menu-button").click();
      cy.findByText("Delete project").click();
      cy.findByText("Tak").click();
    });
    cy.get("article").should("exist");
  });
});
