describe("homepage E2E testing", () => {
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
  });

  it("Creates new project", () => {
    cy.findByRole("textbox").type("New test project 2");
    cy.findByRole("button", { name: /utwórz/i }).click();
  });

  it("Opens Three Dots Menu of newly created project", () => {
    cy.findByText("New test project 2")
      .parent()
      .parent()
      .find(".MuiSvgIcon-root")
      .click();
  });

  it("Deletes Project", () => {
    cy.findByText(/delete project/i).click();
    cy.findByRole("button", { name: /tak/i }).click();
  });
});
