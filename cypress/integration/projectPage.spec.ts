describe("Test project page with API data", () => {
  beforeEach(() => {
    cy.login();
    cy.fetchProjectsFromApi();
  });

  it("logs in correctly", () => {
    cy.url().should("eq", "http://localhost:3000/projects");
    cy.findByText(/login/i).should("not.exist");
  });

  it("displays 'add new project' modal", () => {
    cy.findByRole("heading", { name: /podaj nazwę projektu/i }).should(
      "not.exist"
    );

    cy.findByRole("button", { name: /nowy projekt/i }).click();

    cy.findByRole("heading", { name: /podaj nazwę projektu/i }).should("exist");
  });

  it("enables 'create' button when some text typed in input and hides modal on 'create' button click", () => {
    cy.findByRole("button", { name: /nowy projekt/i }).click();

    cy.findByRole("button", { name: /utwórz/i }).should("be.disabled");

    cy.findByRole("textbox").type("test project name");

    cy.findByRole("button", { name: /utwórz/i }).should("be.enabled");
    cy.findByRole("button", { name: /utwórz/i })
      .click()
      .findByRole("heading", {
        name: /podaj nazwę projektu/i,
      })
      .should("not.exist");
  });
});

describe("test project page with empty project list", () => {
  beforeEach(() => {
    cy.login();
    cy.fetchEmptyProjectList();
  });

  it("should display start page if there are no projects on the list", () => {
    cy.findByTestId("AutoAwesomeOutlinedIcon").should("exist");
  });
});
