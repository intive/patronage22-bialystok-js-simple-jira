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

  it("clicking New Project button should open New Item Dialog", () => {
    cy.findByText(`Nowy Projekt`).click();
    cy.get(".MuiModal-root").should("exist");
  });

  it("when inut is empty Create button should be disabled", () => {
    cy.findByText("Utwórz").should("be.disabled");
  });

  it("when inut is not empty Create button should be enabled", () => {
    cy.get("#styled-text-input").type(randomString);
    cy.findByText("Utwórz").should("be.not.disabled");
  });

  it("when clicked in Create button New Item Dialog should be closed", () => {
    cy.findByText("Utwórz").click();
    cy.get(".MuiModal-root").should("not.exist");
  });

  // it("get random Project and try to delete it", () => {
  //     cy.get(".MuiModal-root").should("not.exist");
  // });
});
