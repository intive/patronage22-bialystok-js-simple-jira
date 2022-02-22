describe("homepage E2E testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders correctly", () => {
    cy.get("#root").should("exist");
  });

  it("allows to change language", () => {
    cy.findByText("Check here if i18n works").should("exist");
    cy.findByText("Sprawdź tutaj czy i18n działa").should("not.exist");
    const select = cy.findByText("english");
    select.click();
    cy.findByText("polski").click();

    select.should("have.text", "polski");
    cy.findByText("Check here if i18n works").should("not.exist");
    cy.findByText("Sprawdź tutaj czy i18n działa").should("exist");
  });

  it("should be possible to type 'text' in the input filed", () => {
    cy.get("#styled-text-input").type("text");
  });

  it("allows three dots menu to be used", () => {
    cy.findByText("Add column").should("not.exist");
    cy.findByText("Delete project").should("not.exist");

    const button = cy.get("#three-dots-menu-button");
    button.click();
    cy.findByText("Add column").click();

    button.click();
    cy.findByText("Delete project").click();
  });

  it("should be possible to go to second page when clicked on button link", () => {
    cy.url().should("eq", "http://localhost:3000/");
    cy.get("a").click();
    cy.url().should("eq", "http://localhost:3000/second");
  });
});
