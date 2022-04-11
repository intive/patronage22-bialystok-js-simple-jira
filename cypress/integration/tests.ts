describe("tests group #1", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000//projects");
    localStorage.setItem("USE_MOCK", "true");
    cy.get("input[name=login]").type("AK");
    cy.get("input[name=password]").type("Patronage22!{enter}");
  });

  it('test #1 Kliknięcie "New project" na liście projektów powinno wyświetlić dialog z pytaniem o nazwę projekt', () => {
    cy.findByText("Nowy Projekt").click();
    cy.get("div[role=dialog]")
      .should("be.visible")
      .should("contain", "Podaj nazwę projektu");
  });

  it('test #2 Wpisanie nazwy projektu w dialogu powinno uaktywnić przycisk "Create", a po jego kliknięciu dialog powinien zniknąć.', () => {
    cy.findByText("Nowy Projekt").click();
    cy.get("button[disabled]");
    cy.get("#styled-text-input").type("nazwa");
    cy.findByText("Utwórz").click();
    cy.get("div[role=dialog]").should("not.exist");
  });

  it("test #3 Usunięcie projektu - wybranie projektu z listy, sprawdzenie czy wyświetla się dialog i potwierdzenie usunięcia - powinno zamknąć dialog.", () => {
    cy.get("#three-dots-menu-button").first().click();
    cy.findByText("Delete project").click();
    cy.get("div[role=dialog]").should("be.visible");
    cy.get("button").contains("Tak").click();
    cy.get("div[role=dialog]").should("not.exist");
  });
});
